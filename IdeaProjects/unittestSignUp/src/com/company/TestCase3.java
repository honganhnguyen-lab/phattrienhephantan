package com.company;

public class TestCase3 {
    public static void Unittest3 () throws Exception{
        String phonenumber ="9364787322";
        String password = "hjd8620992";
        String uuid ="169";
        System.out.println("Test case 3: ");
        if(phonenumber.charAt(0) != 0 || phonenumber.length()!=10){
            throw new AssertionError("Phonenumber invalidated");
        }
        System.out.println("Finished");


    }
}
