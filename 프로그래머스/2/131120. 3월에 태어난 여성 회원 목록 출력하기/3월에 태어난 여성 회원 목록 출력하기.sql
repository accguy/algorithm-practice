SELECT MEMBER_ID, MEMBER_NAME, GENDER, DATE_FORMAT(DATE_OF_BIRTH, '%Y-%m-%d') 
AS DATE_OF_BIRTH 
FROM MEMBER_PROFILE
WHERE MONTH(DATE_OF_BIRTH) = 3 
AND TLNO IS NOT NULL 
AND GENDER = 'W' 
ORDER BY MEMBER_ID;