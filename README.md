# AdventureWorks Database and Web Application

This project presents a comprehensive solution leveraging the AdventureWorks dataset, aimed at creating a database and a web application with microservices. The Project/Assignment is divided into two main parts:

### Part 1: Creating the database and web application with microservices.

### Part 2: Creating an ETL process to generate final visualizations and answer questions.

## Part 1: Database and Web Application

### Database setup

1. Created a SQL Database in Azure using a sample image of the AdventureWorks Lightweight dataset.

## Microservices

Gateway

- Created an Express applictaion thats running on port 8000
- Redirects requests to product, customer, and management services.
- Access routes: /customer, /product, /management.

Product Microservice

- Fetch basic product information from the AdventureWorks Database.
- Endpoint: /product/:id to display product details.

Customer Microservice

- Fetch basic customer data (title, first name, last name, email address, phone number) from the AdventureWorks database.
- Endpoint: /customer/:prefix to list customers by last name prefix.

Management Microservice

- Write queries to answer specific questions about the AdventureWorks database.
- Endpoints: /management/queryX where X is 'a' to 'e' representing different queries.

## Part 2: ETL Process and Visualization

### Tools Setup
1. Create a Data Facotry
2. Set up Linked Service for the SQL Database.
3. Create Datasets for customers and SalesOrderHeader tables.
4. Create empty tables in the database for final transformed data.
5. Create datasets in the data facotry for the empty tables.

### Pipeline Tasks
1. Transform SalesOrderHeader and Customer tables:
    * Delete unnecessary columns.
    * Rename columns.
2. Define sinks for loading transformed data.

### Power BI Visualization
1. Cleanse data to remove duplicates and handle NULL values.
2. Load data into Power BI for visualization

## Questions Answered
### Part 1
- Which categories do not have a ParentProductCategoryId?
- Average prices of products within each category and parent category.
- Customers who made orders within a specific date range.
- Customers whose names meet certain criteria.

### Part 2
- Number of empty rows in specific columns.
- Total tax amount paid.
- Account number that paid the most taxes.

### Screenshots and Visualizations
- Screenshots of Power BI visualizations named according to the provided format.
- .pbix files uploaded to the "PowerBI_Graphs" folder.