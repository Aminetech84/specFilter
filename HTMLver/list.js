/* Specialties */
const agr = 'AGR';
const aig = 'AIG';
const art = 'ART';
const bam = 'BAM';
const btp = 'BTP';
const cip = 'CIP';
const cml = 'CML';
const cpx = 'CPX';
const ele = 'ELE';
const hrt = 'HRT';
const iaa = 'IAA';
const inp = 'INP';
const int = 'INT';
const mee = 'MEE';
const mes = 'MES';
const mme = 'MME';
const tag = 'TAG';
const tav = 'TAV';
const thc = 'THC';

/* Duration */
const six= '06 شهرا'
const twelve= '12 شهرا'
const eighteen= '18 شهرا'
const twenty= '24 شهرا'
const thirty= '30 شهرا'

/* Condition */
const primary ='طور الابتدائي'
const endPrimary ='نهاية الطور الابتدائي'
const middle ='طور المتوسط'
const forthMiddle ='الرابعة متوسط'
const firstHigh ='الأولى ثانوي'
const secondHigh ='الثانية ثانوي'
const thirdHigh ='الثالثة ثانوي'




/**
 * 
الفلاحة  AGR 
الفنون والصناعة المطبعية  AIG 
الحرف التقميدية  ART 
الخشب والتأثيث  BAM 
البناء والأشغال العمومية  BTP 
الكيمياء الصناعية والبلاستيك  CIP 
الإنشاءات المعدنية  CML 
الصناعة الجمدية  CPX 
الكهرباء – الإلكترونيك- طاقوية  ELE 
الفندقة -الإطعام والسياحة  HRT 
صناعة الأغذية الز ا رعية  IAA 
الصناعات النفطية  INP 
المعموماتية – الرقمنة– الاتصالات  INT 
مهن المياه والبيئة  MEE 
مهن الخدمات  MES 
ميكانيك المحركات والآليات  MME 
تقنيات الادارة والتسيير  TAG 
تقنيات السمعي البصري  TAV 
النسيج والألبسة  THC 
 */
export const specs = [];
/*    
[
        {
            code: 'TAG1201',
            name: 'تقني',
            level: '1',
            duration: '12 شهرًا',
            condition: `${endPrimary}`
        },

        {
            code: 'TAG1202',
            name: 'تقني سامي',
            level: '1',
            duration: '13 شهرًا',
            condition: endPrimary
        },

        {
            code: 'TAG1203',
            name: 'عون',
            level: '1',
            duration: '14 شهرًا',
            condition: middle
        }
    ];*/

class Speciality {
    constructor(code,name,level,duration,condition) {
        this.code = code,
        this.name = name,
        this.level = level,
        this.duration = duration,
        this.condition = condition
    }
}

const name = new Speciality('TAG1203','امانة','3','18 شهرًا',middle);
const name1 = new Speciality('TAG1203','امانة','3','18 شهرًا',middle);
const name2 = new Speciality('TAG1203','امانة','3','18 شهرًا',middle);

//console.log(name);
//specs.filter
//feilds>neches>trades

specs.push(name,name1,name2)

//console.log(specs[0].TAG);

/*
نهاية الطور الابتدائي
12 شهرًا
*/