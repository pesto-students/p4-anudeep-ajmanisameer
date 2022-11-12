
## Find the item that has minimum weight

SELECT MIN(weight) as min_weight
FROM items;

## Find the different warehouses in “Pune”.
SELECT location FROM Warehouses
WHERE City = 'Pune';

## Find the details of items ordered by a customer “Mr. Patil”.
SELECT cno, itemno FROM Items
WHERE cname = 'Mr. Patil'

## Find a Warehouse which has maximum stores.

## Find an item which is ordered for a minimum number of times.

## Find the detailed orders given by each customer.

