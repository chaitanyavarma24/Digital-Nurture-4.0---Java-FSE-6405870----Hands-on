
BEGIN
  FOR cust IN (
    SELECT customer_id, balance
    FROM bank_customers
  ) LOOP
    IF cust.balance > 10000 THEN
      UPDATE bank_customers
      SET is_vip = 'Y'
      WHERE customer_id = cust.customer_id;
    ELSE 
      UPDATE BANK_CUSTOMERS SET is_vip ='N'
      WHERE CUSTOMER_ID=cust.customer_id;
    END IF;
  END LOOP;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('VIP status set for customers with balance over 10,000.');
END;