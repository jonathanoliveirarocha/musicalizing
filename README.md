## Musicalizing

**Accessible project link: <a href="https://musicalizing.onrender.com/">Musicalizing</a>**

### What it is :
API developed to show a little of Brazilian musical culture, providing random music based on a genre passed as a parameter. Main API page developed in <a href="https://tailwindcss.com/">Tailwind CSS</a>.


### Technologies and libraries used :

- Node.js
- MongoDB
- Express
- handlebars
- mongoose
- HTML, CSS, JavaScript
- Tailwind CSS

### Running the Application :

#### Consuming the API :
**All necessary documentation is available on the application's <a href="https://musicalizing.onrender.com/">main</a> page**

#### Running locally :
1. First, make sure you have <a href="https://nodejs.org/en">Node.js</a> installed on your machine.

   > Program developed in version 18.12.1 on Node.js.

2. To run the project, you need to create a file called ".env" in the root directory, paste the lines below into this file and replace the strings with their respective information:

    ```bash
        MONGODB_URI ="<YOUR-MONGODB-DATABASE-URI>"
        SONGS_ID = "<COLLECTION-ID>"
    ```
    > "COLLECTION-ID": Collection where songs are stored by genre..

3. Then install the project <a href="./package.json">requirements</a> with the command in the terminal:

   ```bash
   npm install
   ```

4. Build the application's styling Tailwind CSS file:

   ```bash
   npx tailwindcss-cli@latest build -o public/css/style.css
   ```

5. Now, just run the <a href="index.js">main</a> file with the following command:

   ```bash
   node index.js
   ```

### Preview :

<table width="100%"> 
<tr>
<td width="100%">
<img src="./SAMPLE.png/">
</td> 
</table>
