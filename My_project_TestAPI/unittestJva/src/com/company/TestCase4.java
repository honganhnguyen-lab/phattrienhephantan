package com.company;

import java.io.IOException;

public class TestCase4 {
    public static void Unittest3(String token, String pass, String newpass) throws IOException {
        System.out.println("Unit test 4: The account is blocked");
        ResponseChangePass res = TestCaseChangePassAPI.callAPI(token, pass, newpass);


    }
}
