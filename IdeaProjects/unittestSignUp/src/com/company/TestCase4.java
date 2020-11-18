package com.company;

public class TestCase4 {
    public static void Unittest3 () throws Exception{
        String phonenumber ="9364787322";
        String password = "hjd8620992";
        String uuid ="169";
        System.out.println("Test case 4: ");
        if(password.length() <=6 || password.length() >=10||password.equals(phonenumber)){
            throw new AssertionError("Password invalidated");
        }
        System.out.println("Finished");


    }
}
