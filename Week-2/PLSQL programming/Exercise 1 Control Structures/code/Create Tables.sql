CREATE TABLE bank_customers (
    customer_id   NUMBER PRIMARY KEY,
    name          VARCHAR2(50),
    age           NUMBER,
    balance       NUMBER,
    loan_intrest  NUMBER(5,2),
    is_vip        CHAR(1)  
);


CREATE TABLE loans (
    loan_id      NUMBER PRIMARY KEY,
    customer_id  NUMBER,
    due_date     DATE,
    CONSTRAINT fk_customer
      FOREIGN KEY (customer_id)
      REFERENCES bank_customers(customer_id)
);
