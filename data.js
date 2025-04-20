// Sample letter data array
// This array will be populated with all the letter entries
const letterData = [
    {
        itemNo: "आइटम १",
        officeName1: ["श्री","सर्वोच्च अदालत"],
        officeName2: ["मुद्दा तथा रिट महाशाखा"],
        contactInfo: [
            "फोन/फ्याक्स नम्बर:०१-४२४२०५०, ०१-४२६२८०३",
            "एक्सटेन्सन: ४०३४९१, ४०३४५३, ४०३४६१, ४०३०५८",
            "Email: sarbochchadalatrit@supremecourt.gov.np"
        ],
        department: "संवैधानिक इजलास",
        mainOffice: "",
        entryNo: "१३०३०",
        entryDate: "२०७९-१२-२०",
        dispatchedNo: "",
        caseNo: "०८०-WO-०३५८",
        date: "मिति:२०८० १२ २०",
        subject: "लिखित जवाफ सूचना ।",
        addressedTo:  [
            "माननीय महान्यायाधिवक्तज्यूको सचिवालय",
            "नायब महान्यायाधिवक्तज्यूहरु सबै, महान्यायाधिवक्ताको कार्यालय, काठमाडौं।",
            "उच्च सरकारी वकील कार्यालय, सबै, विशेष सरकारी वकील कार्यालय, काठमाडौं, जिल्ला सरकारी वकील कार्यालय, सबै।"
        ],
        content: "रिट निवेदक मुकुन्दन रेग्मी विरुद्ध प्रधानमन्त्री तथा मन्त्रीपरिषद्को कार्यालय समेत भएको ०८० वर्षको बिषेश प्रकृति पूर्ण इजलासको पेसी मिति २०८०-१२-२३ गतेका दिन तोकि यसै साथ संलग्न पेशी सुची पठाइएको व्यहोरा जानकारी गराइन्छ ।",
        images: [],
        signature1: {
            sign: "",
            name: "इन्द्र बहादुर दि.सी.",
            position: "(सम्बन्धित शाखा)"
        },
        signature2: {
            sign: "",
            name: "तारानाथ लुइटेल",
            position: "(शाखा प्रमुख)"
        },
        footerPhone: "०१-४२५६२९७",
        footerEmail: "sarbochchadalatrit@supremecourt.gov.np",
        tokadesh: "श्री रिट फाँट आवश्यक कार्यार्थ ",
        bodharthaList: []
    },
    {
        itemNo: "LTR/2025/001",
        officeName1: ["Office of the Director", "Department of Communications"],
        officeName2: ["Government of Example", "Ministry of Information"],
        contactInfo: [
            "123 Government Plaza, Capital City",
            "Phone: +1-234-567-8900",
            "Email: info@govexample.org"
        ],
        department: "Communications",
        mainOffice: "Headquarters",
        entryNo: "ENT/2025/123",
        entryDate: "2025-04-15",
        dispatchedNo: "DISP/2025/456",
        caseNo: "CASE/2025/789",
        date: "April 20, 2025",
        subject: "Regarding the Implementation of New Communication Protocols",
        addressedTo: "All Department Heads",
        content: "This letter serves as a formal notification regarding the implementation of new communication protocols that will take effect starting May 1, 2025.\n\nThe new protocols are designed to enhance interdepartmental communication efficiency and ensure that all staff members have access to the information they need in a timely manner.\n\nKey changes include:\n1. Standardized email formats for different types of communications\n2. Weekly departmental briefings\n3. Centralized document sharing system\n\nTraining sessions will be conducted between April 25-30, 2025. Please ensure that all staff members in your respective departments attend these sessions.\n\nYour cooperation in this matter is highly appreciated.",
        images: [],
        signature1: {
            sign: "J. Smith",
            name: "John Smith",
            position: "Director of Communications"
        },
        signature2: {
            sign: "S. Johnson",
            name: "Sarah Johnson",
            position: "Deputy Director"
        },
        footerPhone: "+1-234-567-8901",
        footerEmail: "j.smith@govexample.org",
        tokadesh: "Please acknowledge receipt of this letter.",
        bodharthaList: [
            "Secretary, Ministry of Information",
            "IT Department for implementation",
            "Office records"
        ]
    },
    {
        itemNo: "LTR/2025/002",
        officeName1: ["Department of Finance", "Budget Division"],
        officeName2: ["Government of Example"],
        contactInfo: [
            "456 Treasury Building, Capital City",
            "Phone: +1-234-567-8902",
            "Email: finance@govexample.org"
        ],
        department: "Finance",
        mainOffice: "Treasury Building",
        entryNo: "ENT/2025/124",
        entryDate: "2025-04-16",
        dispatchedNo: "DISP/2025/457",
        caseNo: "CASE/2025/790",
        date: "April 21, 2025",
        subject: "Q2 Budget Allocation Notification",
        addressedTo: "All Departmental Finance Officers",
        content: "This letter is to inform all departmental finance officers that the budget allocations for Q2 2025 have been finalized and approved by the Ministry of Finance.\n\nThe allocated funds will be transferred to respective departmental accounts by April 30, 2025. Please ensure that all Q1 expenditure reports are submitted before April 25, 2025, as any pending reports may delay the transfer of funds.\n\nAttached with this letter is a detailed breakdown of the allocations. If you have any questions or require clarification, please contact the Budget Division.",
        images: [],
        signature1: {
            sign: "R. Williams",
            name: "Robert Williams",
            position: "Chief Financial Officer"
        },
        signature2: {
            sign: "",
            name: "",
            position: ""
        },
        footerPhone: "+1-234-567-8903",
        footerEmail: "r.williams@govexample.org",
        tokadesh: "For immediate attention and necessary action.",
        bodharthaList: [
            "Ministry of Finance",
            "Auditor General's Office",
            "All Department Heads"
        ]
    },
    {
        itemNo: "LTR/2025/003",
        officeName1: ["Human Resources Department"],
        officeName2: ["Government of Example"],
        contactInfo: [
            "789 Administration Block, Capital City",
            "Phone: +1-234-567-8904",
            "Email: hr@govexample.org"
        ],
        department: "Human Resources",
        mainOffice: "Administration Block",
        entryNo: "ENT/2025/125",
        entryDate: "2025-04-17",
        dispatchedNo: "DISP/2025/458",
        caseNo: "",
        date: "April 22, 2025",
        subject: "Annual Employee Performance Review Schedule",
        addressedTo: "All Government Employees",
        content: "This letter is to inform all employees that the annual performance review process for the year 2024-2025 will commence on May 5, 2025, and conclude on June 15, 2025.\n\nAll employees are required to complete their self-assessment forms by May 10, 2025. Department heads will conduct individual review meetings between May 15 and June 10, 2025.\n\nThe HR department will provide detailed guidelines and necessary forms via email by April 25, 2025. If you have any questions regarding the review process, please contact the HR department.",
        images: [],
        signature1: {
            sign: "M. Chen",
            name: "Michelle Chen",
            position: "HR Director"
        },
        signature2: {
            sign: "",
            name: "",
            position: ""
        },
        footerPhone: "+1-234-567-8905",
        footerEmail: "m.chen@govexample.org",
        tokadesh: "",
        bodharthaList: [
            "All Department Heads",
            "Employee Union Representatives"
        ]
    }
    // Additional entries can be added here following the same structure
    // Entries will be added manually as per the requirement
];

// Note: The array can be extended to include up to 30 items or more as needed.