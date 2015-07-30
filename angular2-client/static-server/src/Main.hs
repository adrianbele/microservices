{-# LANGUAGE OverloadedStrings #-}
import System.IO
import qualified Network.Wai.Middleware.Static as S
import qualified Network.Wai.Handler.Warp as W
import Network.Wai.Request(guessApproot)
import Network.Wai
import Network.HTTP.Types as H

-- Fallback if serveNotFound can not find "/index.html"
notFound404App :: Application
notFound404App request respond = respond $ responseLBS
        H.status404
        [("Content-Type", "text/plain")]
        "Not found"

addIndex = S.policy$ \x -> Just$ x ++ "/index.html"

base = "/www"
regularPolicy = S.addBase base
indexPolicy = regularPolicy S.>-> addIndex
notFoundPolicy = S.policy$ \_ -> return$ base ++ "/index.html"

serveRegular cacheContainer = S.staticPolicy' cacheContainer regularPolicy
serveIndex cacheContainer = S.staticPolicy' cacheContainer indexPolicy
serveNotFound cacheContainer = S.staticPolicy' cacheContainer notFoundPolicy

main = do
  cacheContainer <- S.initCaching S.PublicStaticCaching
  let app = serveRegular cacheContainer (serveIndex cacheContainer (serveNotFound cacheContainer notFound404App))
  W.run 3000 app
