INSERT INTO bank_customers VALUES (1, 'Chaitanya',  23,  5000,   9.50, NULL);
INSERT INTO bank_customers VALUES (2, 'Varma',      67, 15000,  10.00, NULL);
INSERT INTO bank_customers VALUES (3, 'Bunny',      45,  8000,  11.00, NULL);
INSERT INTO bank_customers VALUES (4, 'Pavani',     70, 12000,   8.75, NULL);
INSERT INTO bank_customers VALUES (5, 'Bhanu',      62,  9500,   9.25, NULL);
INSERT INTO bank_customers VALUES (6, 'Raj',        31, 20000,  10.50, NULL);
INSERT INTO bank_customers VALUES (7, 'Sneha',      55, 11000,   9.00, NULL);
INSERT INTO bank_customers VALUES (8, 'Teja',       65,  7500,  10.25, NULL);
INSERT INTO bank_customers VALUES (9, 'Meena',      28,  6000,   9.75, NULL);
INSERT INTO bank_customers VALUES (10, 'Karthik',   72, 16000,   8.50, NULL);


INSERT INTO loans VALUES (101, 2,  TO_DATE('05-JUL-2025', 'DD-MON-YYYY')); 
INSERT INTO loans VALUES (102, 4,  TO_DATE('15-JUL-2025', 'DD-MON-YYYY'));
INSERT INTO loans VALUES (103, 6,  TO_DATE('25-JUL-2025', 'DD-MON-YYYY'));
INSERT INTO loans VALUES (104, 7,  TO_DATE('22-JUN-2025', 'DD-MON-YYYY'));
INSERT INTO loans VALUES (105, 9,  TO_DATE('01-AUG-2025', 'DD-MON-YYYY'));

COMMIT;