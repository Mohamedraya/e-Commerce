// المفروض انادي الفاليديت فونكشن بتاعتها
// ف عشات اتادي الفاليديت فونكشن بتاعت الروول ف اعرف اوبجيكت 
// ف الأوبجيكت ده كل وظيفته ان هو يعمل مابينج مابين الروول ويحولهولي للفاليديتور فونكشن الخاصه بيه
// ليه الرول عباره عن اوبجيكت وجواه كيي ليه ميكنش ارراي اوف استرنج
// ده لأن الرول ممكن تحتاج اتريبيوت تاني عشان يعرف الرول تفسها هتشتفل ازاي 
//



const ruleValidatorMapper = {
    isPhone: validatePhone,
    isMinimumChars : validateMinimumChars,
    isConfirmationCode: validateConfirmationCode
};

function validatePhone (enteredPhone) {
    // 11 digit
    if(enteredPhone.length !== 11) {
      return false;
     }    
  
    return /^[0-9]+$/.test(enteredPhone);
    
    //Array.from(enteredPhone).every(char => char >=0 && char <=9);  
    //'input' => ['i','n','p','u','t']
  };

  function validateConfirmationCode (inputVal) {

    if(inputVal.length !== 4) {
        return false;
       }    
    
      return /^[0-9]+$/.test(inputVal);
      
  };

  function validateMinimumChars (inputVal , {minimumChars}) {


    return inputVal.length >= minimumChars;
  };


export function validate (inputUser,rules) {

    let isValid = true;
    for (let rule of rules) {
       isValid = isValid && ruleValidatorMapper[rule.key](inputUser,rule);
    }

    return isValid;
}


