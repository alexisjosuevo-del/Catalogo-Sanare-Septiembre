export default function handler(req, res) {
  const auth = req.headers.authorization;

  const user = "sanare";
  const pass = "12345";

  if (!auth || auth !== "Basic " + Buffer.from(user + ":" + pass).toString("base64")) {
    res.statusCode = 401;
    res.setHeader("WWW-Authenticate", "Basic realm=\"Secure Area\"");
    res.end("Auth required");
    return;
  }

  res.statusCode = 200;
  res.end();
}
