package org.parkee;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        SingleLinkedList list = new SingleLinkedList(new Node(2));

        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtBeginning(5);
        list.insertAtBeginning(1);

        System.out.print("Isi Linked List: ");
        list.display();

        list.deleteByValue(10);
        System.out.print("Setelah hapus 10: ");
        list.display();

        list.deleteByValue(1);
        System.out.print("Setelah hapus 1: ");
        list.display();
    }
}