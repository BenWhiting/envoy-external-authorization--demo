# envoy-external-authorization--demo
Showing how envoy can utilize an external authorization deployment

## How to Run

`docker-compose up`

### Curl Calls

successful/authorized
`curl -H "Content-Type: application/json" --user "ricklee:123456"   localhost:80/service/1`

failure/authorized
`curl -H "Content-Type: application/json" --user "ricklee:BAD"   localhost:80/service/1`
