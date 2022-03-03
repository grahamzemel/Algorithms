package Youtube.DynamicProgramming.GoodAlgorithms;
//doesent work
import java.util.*;

public class stringorganize {

    public static void organize(String S) {
        String W[] = S.split(" ");
        System.out.println(W[0]);
        for(int i = 0; i<W.length; i++){
            W[i].compareTo(W[i++]);
        }
    }

    public static void main(String[] args) {

        organize("Dog cat lazy foxes");
    }
}