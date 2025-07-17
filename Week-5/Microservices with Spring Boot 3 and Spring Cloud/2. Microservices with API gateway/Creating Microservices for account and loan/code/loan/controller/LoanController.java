package com.cognizant.loan.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{number}")
    public Loan getLoan(@PathVariable String number) {
        return new Loan("H00987987972342", "car", 400000, 3258, 18);
    }

    static class Loan {
        public String number;
        public String type;
        public double loan;
        public double emi;
        public int tenure;

        public Loan(String number, String type, double loan, double emi, int tenure) {
            this.number = number;
            this.type = type;
            this.loan = loan;
            this.emi = emi;
            this.tenure = tenure;
        }
    }
}
