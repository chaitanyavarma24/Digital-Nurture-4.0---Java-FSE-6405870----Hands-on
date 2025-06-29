BEGIN
  FOR cust IN (
    SELECT customer_id, age, loan_intrest
    FROM bank_customers
  ) LOOP
    IF cust.age > 60 THEN
      UPDATE bank_customers
      SET loan_intrest = cust.loan_intrest - 1
      WHERE customer_id = cust.customer_id;
    END IF;
  END LOOP;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('1% interest discount applied to customers above 60.');
END;