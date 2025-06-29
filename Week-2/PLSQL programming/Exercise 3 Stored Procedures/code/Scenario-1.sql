CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.012)
    WHERE AccountType = 'Savings';

    DBMS_OUTPUT.PUT_LINE('1.2% interest applied to all savings accounts.');
END;
/
