package com.company;

import java.io.IOException;

public class TestCase3 {
    public static void Unittest3(String token, String pass, String newpass) throws IOException {
        System.out.println("Unit test 3: The internet connected");
        ResponseChangePass res = TestCaseChangePassAPI.callAPI(token, pass, newpass);
        if (res.code != "1001") throw new AssertionError();
        if (res.message != "Can not connect to DB" ) throw new AssertionError();
        System.out.println("Internet is disconnected");
        System.out.println("Finished");
    }
}
