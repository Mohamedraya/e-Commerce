import React, { useEffect } from 'react';
 // المشكله دي بتحصل مع تغيير الصكصيص والمونتينج اول مره
  // اذا انا محتاج هووك يعمل تنفيذ لحاجه معينه هنا كده فقط لو حصل معانا تغيير 
  // مش ف اول مره 
  //  isInitialMount وده فاريابل بيوضح اذا كنا ف اول مره نعمل مونتينج ولا بنعمل ابدتينج 



export function useUpdateEffect (callback , dependencies) {
    const isInitialMount = useRef(true);

    //كده انا عندي ايفيكت بيتنفذ ف حالة الأبديت بس
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
           callback();
        }
    } , dependencies);    
}

// ف أنا كل اللي عملته حاطيت اللوجك الخاص بيا ف هووك عشان اقدر استخده ف اي مكان