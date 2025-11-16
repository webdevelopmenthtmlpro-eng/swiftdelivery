Postman Collection for SwiftDelivery Backend

File added:
- `swift-delivery-backend/postman_swiftdelivery_backend.postman_collection.json`

How to import
1. Open Postman
2. File → Import → Choose Files
3. Select the JSON file above
4. The collection will import with three requests:
   - `GET http://localhost:5000/health`
   - `POST http://localhost:5000/chat` (Body JSON: `{ "message": "Hello" }`)
   - `POST http://localhost:5000/api/auth/test` (empty JSON body)

Quick curl equivalents

Health:

```bash
curl http://localhost:5000/health
```

Chat:

```bash
curl -X POST http://localhost:5000/chat -H "Content-Type: application/json" -d '{"message":"Hello from curl"}'
```

Auth test:

```bash
curl -X POST http://localhost:5000/api/auth/test -H "Content-Type: application/json" -d '{}'
```

Notes
- Start the backend first (`cd swift-delivery-backend; npm install; npm start`).
- The backend listens on port `5000` by default.
- If you want an environment file for Postman (base URL variable or a pre-request script), tell me what variables you want and I'll add it.
