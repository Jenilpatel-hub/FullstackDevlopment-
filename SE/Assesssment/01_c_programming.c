#include <stdio.h>

int main() {
    int choice, qty;
    float bill = 0;
    char more;

    do {
        // Display Menu
        printf("\n------ FOOD MENU ------\n");
        printf("1. Pizza - 200\n");
        printf("2. Burger - 120\n");
        printf("3. Sandwich - 80\n");
        printf("4. Coffee - 50\n");
        printf("5. Pasta - 150\n");

        // Take user choice
        printf("Enter your choice: ");
        scanf("%d", &choice);

        printf("Enter quantity: ");
        scanf("%d", &qty);

        // Calculate bill using conditional statements
        if(choice == 1)
            bill += 200 * qty;
        else if(choice == 2)
            bill += 120 * qty;
        else if(choice == 3)
            bill += 80 * qty;
        else if(choice == 4)
            bill += 50 * qty;
        else if(choice == 5)
            bill += 150 * qty;
        else
            printf("Invalid choice!\n");

        // Ask user if they want more items
        printf("Do you want to order more? (y/n): ");
        scanf(" %c", &more);

    } while(more == 'y' || more == 'Y');   // Loop continues if user wants more

    // Display final bill
    printf("\nYour Final Bill = %.2f\n", bill);

    return 0;
}
