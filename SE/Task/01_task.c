#include<stdio.h>
#include<conio.h>

int main(){

    float physics,maths,chemistry,sum,average;
    
    printf("Marks Obtained in Physics: ");
    scanf("%f",&physics);
    printf("Physics Marks : %.2f",physics);
    
    printf("\n\nMarks Obtained in maths: ");
    scanf("%f",&maths);
    printf("maths Marks : %.2f",maths);
    
    printf("\n\nMarks Obtained in chemistry: ");
    scanf("%f",&chemistry);
    printf("\nchemistry Marks : %.2f",chemistry);
    
    sum = physics+maths+chemistry;
    printf("\nTotal Marks : %.2f",sum);

	average = sum/300*100;
	printf("\nAverage : %.2f",average);
	
	if(average>100 || average<0){
		printf("\nMarks are invalid");
	}
	else if(average>=70 && average<=100){
		printf("\nGrade A Student");
	}
	else if(average<69 && average>35){
		printf("\nGrade B Student");
	}
	else{
		printf("\nFail");
	}
    return 0;
}
