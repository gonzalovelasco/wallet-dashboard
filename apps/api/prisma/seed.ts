async function main() {
  }
  
  main()
    .then(async () => {
      console.log("Done seeding the database!");
    })
    .catch(async (e) => {
      console.error(e);
      process.exit(1);
    });