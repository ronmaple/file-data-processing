# Data Extraction

- Original(?) project, mainly to play around with file processing
- Work in progress

Frontend:
- React/ Vite
- Typescript
- TailwindCSS

Backend:
- Node
- Typescript


## TODO:
- S3 container
- elasticsearch


## Planning

## Core
### Release 1:
Local Flow setup

I can...
1. Upload a file end to end

When I upload a CSV file...
- Stores file locally
- (Optional) stores file in S3 docker container
- Stores file reference to MongoDB

### Release 2 - TBD if I want to do this. It might be tricky if I decide to add ElasticSearch
Deployed to production
- AWS S3
- AWS EC2
- Either a sandbox mongodb database (Atlas?) or DocumentDB if cheap

* All workflows from here on should be live on prod too, unless I decide to keep this local
* How to handle ElasticSearch in Prod(?)

### Release 3:
- (type of data extraction TBD). Some ideas is if I want to just take csv files and parse the data and add Data Visualization, or parse docs or pdf of some data and do something with them...

## Optional

### Release 3++
- Users

### Release 3++
- Authentication
  