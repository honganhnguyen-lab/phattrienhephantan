package com.company;

public class TestCase4 {
    public static void Unittest4() throws Exception{
        System.out.println("Test Case 4: Invalid password");
        String phonenumber = "0974553829";
        String password = "0974553829";
        String uuid = "13df";
        if(password.equals(phonenumber) || password.length() < 6 || password.length() > 10){
            System.out.println("Password is invalid: too short, too long or the same as the phonenumber. Please check password!");
        } else {
            ResponseLogin res = ResponseLoginAPI.callAPI(phonenumber, password, uuid);
            if ((!"1003".equals(res.code))) throw new AssertionError();
        }
        System.out.println("Finished!");
    }
}
