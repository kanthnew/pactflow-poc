# pactflow-poc

Objective of PoC to implement basic scenario for different use cases

| Provider/Consumer | Use case scenario                   | Status |
|-------------------|-------------------------------------|--------|
| openAPI spec      | Publish provider pact openAPI spec | Done   |
| openAPI spec      | provider pact tests                | Done   |
| openAPI spec      | Publish verify-provider pacts      |        |
| openAPI spec      | Provider can-i-deploy check        |        |
| API client        | Consumer API client Pact tests     |        |
| API client        | Consumer Pact publish              |        |
| API client        | Publish verify-consumer pacts      |        |
| API client        | Consumer can-i-deploy check        |        |
| Web UI client     | Consumer API client Pact tests     |        |
| Web UI client     | Consumer Pact publish              |        |
| Web UI client     | Publish verify-consumer pacts      |        |
| Web UI client     | Consumer can-i-deploy check        |        |


# pactflow knowledge base/capabilities/comparison ...

## Pact open source vs pactflow

https://pactflow.io/oss/


## Sample pactflow managed instance (trial)
[Sample pactflow managed instance](https://yuvsmart.pactflow.io/pacticipants/books-provider/versions/0.0.1?branch=main)


## Consumer Adapters available
https://docs.pactflow.io/docs/bi-directional-contract-testing/tools


### Cypress pact adapter benefits:

- Can be used to validate pacts from UI code
- Integreates with cypress UI tests to validate client against contract using mock
- Generate Pacts from tests



## workflow of consumer and provider contracts

### Bi-directional contracts
![bidirectional contracts](https://docs.pactflow.io/assets/images/1-bi-directional-how_it_works_overview-a66612237bc4bdaf97608aa83f0d0e77.png)

### Consumer can-i-deploy when no provider available
![Consumer can-i-deploy when no provider available](https://docs.pactflow.io/assets/images/2-bi-directional-consumer-pipeline-first-run-1c32471b3f07cd863af5222e5b0ac641.png)

### Consumer can-i-deploy when provider is available and published openAPI spec as pact
![Consimder can-i-deploy when provider is available and published openAPI spec as pact](https://docs.pactflow.io/assets/images/3-bi-directional-consumer-pipeline-deployed-b37f85fff9187378da04bbf1e77c476e.png)



### Writing consumer contracts
![Writing consumer contracts](https://docs.pactflow.io/assets/images/1-bi-directional-consumer-testing-scope-cce3345100bf1a67a2e9352f43417222.png)


