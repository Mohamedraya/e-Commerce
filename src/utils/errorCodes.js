// بمعنى انه اوبجيكت كل وظيفته ان هو هيجيله كود خاص ب ايرور معين وديني الأيرور مسج الخاصه بيه
export const UNEXPECTED_ERROR_CODE = 0;
export const WRONG_CODE_ERROR_CODE = 1;

export const errorCodeMessageMapper = {
    [UNDEFINED] : 'Unexpected Error Please try again',
    [UNEXPECTED_ERROR_CODE]: 'Unexpected Error Please try again',
    [WRONG_CODE_ERROR_CODE]: 'you entered Wrong Code'
};