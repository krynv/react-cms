# React CMS with Redux and [Contentful](https://www.contentful.com/)

A CMS created with Redux, React Router and Contentful. 

You must be a registered user of https://www.contentful.com/ to use this application.

## Prerequisites

This demo application uses Contentful's API to fetch posts created by users via their CMS system.
You must create an account & content model named `post`, with 3 fields: `title`, `description` and `featuredImage`.

Locate your API keys via the dashboard over at https://app.contentful.com - under the `Space Settings` header of the navigation dropdown for `Settings`.

Then proceed to create a `.env` file whoch should look something like this:

```
REACT_APP_API_BASE_URL=https://cdn.contentful.com
REACT_APP_API_SPACE_ID=[Space ID key]
REACT_APP_API_TOKEN=[Content Delivery API key]
```

Place the `.env` file in the root of this repository. 

> **NOTE**: This application is bootstrapped with Create React App, therefore all of the required `.env` variables must be prefixed with something like `REACT_APP_...` in order for this application to work. 

Create a `post` with a title and a description.


## Run the application

Install dependencies:

    npm i

Start the application: 

    npm start

Access the app at:
http://localhost:3000/