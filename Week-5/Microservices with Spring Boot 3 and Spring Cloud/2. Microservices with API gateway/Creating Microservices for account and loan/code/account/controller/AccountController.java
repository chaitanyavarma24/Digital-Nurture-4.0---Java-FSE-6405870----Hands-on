package com.cognizant.account.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @GetMapping("/{number}")
    public Account getAccount(@PathVariable String number) {
        return new Account("00987987973432", "savings", 234343);
    }

    static class Account {
        public String number;
        public String type;
        public double balance;

        public Account(String number, String type, double balance) {
            this.number = number;
            this.type = type;
            this.balance = balance;
        }
    }
}
