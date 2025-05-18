import { defineConfig } from 'cypress'
import fs from 'fs';
import path from 'path'


export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',  // your app URL
        specPattern: 'src/consumer/cypress/e2e/**/*.cy.{js,ts}',
        supportFile: 'src/consumer/cypress/support/index.{js,ts}',
        setupNodeEvents(on, config) {
            on('task', {
                readFile( filePath: string ) {
                    return fs.promises.readFile(path.resolve(__dirname,filePath), 'utf8');
                }
            });

            return config;
        },
    },
})