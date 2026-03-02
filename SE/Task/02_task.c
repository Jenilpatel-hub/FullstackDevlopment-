#include<stdio.h>
#include<conio.h>

void main()
{
	float a,b;
	int operation;
	
	printf("Enter the value of A : ");
	scanf("%f",&a);
	printf("Value of A is :%.2f",a);
	
	printf("\n\nEnter the value of B : ");
	scanf("%f",&b);
	printf("Value of B is :%.2f",b);
	
	printf("\n\nEnter\n1 for add\n2 for sub\n3 for mul\n4 for divi : ");
	scanf("%d",&operation);
	printf("\nNum is : %d",operation);
	
	switch(operation){
		case 1 :
			printf("\nAddition %.2f",a+b);
			break;
		
		case 2 :
			printf("\nSubtraction %.2f",a-b);
			break;
		
		case 3 :
			printf("\nMultiplication %.2f",a*b);
			break;
			
		case 4 :
			printf("\nDivision %.2f",a/b);
			break;
		
		default :
			printf("\nInvalid Number..");	
	}
	
	
	
	getch();
}
