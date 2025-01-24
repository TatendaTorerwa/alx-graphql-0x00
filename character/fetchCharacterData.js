const { ApolloClient, InMemoryCache, gql } = require('@apollo/client');
const fs = require('fs');

// Create an instance of ApolloClient
const client = new ApolloClient({
  uri: 'https://your-graphql-endpoint.com', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

// Define the GraphQL query
const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
    }
  }
`;

// Function to run the query and save the data to a JSON file
const fetchAndSaveCharacterData = async (id) => {
  try {
    const { data } = await client.query({
      query: GET_CHARACTER,
      variables: { id },
    });

    // Create a filename based on the character ID
    const filename = `character-id-${id}-output.json`;

    // Write the query response to a file
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`Data for character ${id} saved to ${filename}`);
  } catch (error) {
    console.error(`Error fetching data for character ${id}:`, error);
  }
};

// Run the query for each character ID
const characterIds = [1, 2, 3, 4]; // Character IDs to query

// Iterate over each character ID and fetch/save their data
characterIds.forEach((id) => fetchAndSaveCharacterData(id));
