<h1 align="center">Mini E-commerce System</h1>
</br>
</br>
<h3>🖥️ Overview</h3>
------------
<p>This is a Rest API that provides CRUD functionality (Create, Read, Update and Delete) products in a mini e-commerce system that uses the NestJS framework. The project structure follows the pattern of folders and files recommended by NestJS itself. The src folder contains the source code files, including the main.ts file, which is the entry point to the server, and the database folder, which contains database-related files. This API also includes an authentication system using JWT (JSON Web Token).</p>
</br>
<h3>🦾 Technologies</h3>
------------
<ul>
  <li>Nest.js</li>
  <li>Express.js</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>JWT</li>
</ul>
</br>
<h3>Prerequisites</h3>
------------
<ul>
  <li>Node.js: 9.x.x</li>
  <li>Docker-compose: 3.9</li>
</ul>
</br>
<h3>Setup</h3>
------------
<ul>
  <li>Clone the repository: git clone git@github.com:your-username/online_menu.git</li>
  <li>Go to the project directory: cd online_menu</li>
  <li>Install dependencies: npm install</li>
  <li>Start the application: npm run start:dev</li>
</ul>
</br>
<h3>Running with Docker</h3>
------------
<ul>
 <li>Clone the repository: git clone git@github.com:your-username/online_menu.git</li>
 <li>Go to the project directory: cd online_menu</li>
 <li>Build the Docker image: docker-compose build</li>
 <li>Start the containers: docker-compose up -d</li>
</ul>
</br>
<h3>Endpoints</h3>
------------
<h5>Auth</h5>
<ul>
  <li>POST /login: login with email and password to get a token</li>
  <li>POST /login/new-user: to create a new user on DB</li>
  <li>GET /login/: to list all users on DB</li>
</ul>
<h5>Produto</h5>
<ul>
  <li>GET /products/: get all products</li>
  <li>GET /product/:id: get a product by id</li>
  <li>POST /product/new-product: create a new product</li>
  <li>PATCH /product/:id: update a product by id</li>
  <li>DELETE /product/:id: delete a product by id</li>
</ul>
