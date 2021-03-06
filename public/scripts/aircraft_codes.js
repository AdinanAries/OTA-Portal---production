var aircrats = [
    {IATA: "100", Manufacturer: "Fokker", Type_Model: "100", Wake: "M"},
    {IATA: "141", Manufacturer: "BAe", Type_Model: "146-100", Wake: "M"},
    {IATA: "142", Manufacturer: "BAe", Type_Model: "146-200", Wake: "M"},
    {IATA: "143", Manufacturer: "BAe", Type_Model: "146-300", Wake: "M"},
    {IATA: "146", Manufacturer: "BAe", Type_Model: "146", Wake: "M"},
    {IATA: "14F", Manufacturer: "BAe", Type_Model: "146 Freighter (-100/200/300QT & QC)", Wake: "M"},
    {IATA: "14X", Manufacturer: "BAe", Type_Model: "146 Freighter (-100QT & QC)", Wake:	"M"},
    {IATA: "14Y", Manufacturer: "BAe", Type_Model: "146 Freighter (-200QT & QC)", Wake:	"M"},
    {IATA: "14Z", Manufacturer: "BAe", Type_Model: "146 Freighter (-300QT & QC)", Wake:	"M"},
    {IATA: "310", Manufacturer: "Airbus", Type_Model: "A310", Wake: "H"},
    {IATA: "312", Manufacturer: "Airbus", Type_Model: "A310-200", Wake: "H"},
    {IATA: "313", Manufacturer: "Airbus", Type_Model: "A310-300", Wake: "H"},
    {IATA: "318", Manufacturer: "Airbus", Type_Model: "A318", Wake: "M"},
    {IATA: "319", Manufacturer: "Airbus", Type_Model: "A319", Wake: "M"},
    {IATA: "31F", Manufacturer: "Airbus", Type_Model: "A310F", Wake: "M"},
    {IATA: "31X", Manufacturer: "Airbus", Type_Model: "A310-200F", Wake: "M"},
    {IATA: "31Y", Manufacturer: "Airbus", Type_Model: "A310-300F", Wake: "M"},
    {IATA: "320", Manufacturer: "Airbus", Type_Model: "A320-100/200", Wake: "M"},
    {IATA: "321", Manufacturer: "Airbus", Type_Model: "A321-100/200", Wake: "M"},
    {IATA: "32A", Manufacturer: "Airbus", Type_Model: "A320 (sharklets)", Wake: "M"},
    {IATA: "32B", Manufacturer: "Airbus", Type_Model: "A321 (sharklets)", Wake: "M"},
    {IATA: "32C", Manufacturer: "Airbus", Type_Model: "A318 (sharklets)", Wake: "M"},
    {IATA: "32D", Manufacturer: "Airbus", Type_Model: "A319 (sharklets)", Wake: "M"},
    {IATA: "330", Manufacturer: "Airbus", Type_Model: "A330", Wake: "H"},
    {IATA: "332", Manufacturer: "Airbus", Type_Model: "A330-200", Wake: "H"},
    {IATA: "333", Manufacturer: "Airbus", Type_Model: "A330-300", Wake: "H"},
    {IATA: "33F", Manufacturer: "Airbus", Type_Model: "A330 Freighter", Wake: "H"},
    {IATA: "33X", Manufacturer: "Airbus", Type_Model: "A330-200 Freighter", Wake: "H"},
    {IATA: "340", Manufacturer: "Airbus", Type_Model: "A340", Wake: "H"},
    {IATA: "342", Manufacturer: "Airbus", Type_Model: "A340-200", Wake: "H"},
    {IATA: "343", Manufacturer: "Airbus", Type_Model: "A340-300", Wake: "H"},
    {IATA: "345", Manufacturer: "Airbus", Type_Model: "A340-500", Wake: "H"},
    {IATA: "346", Manufacturer: "Airbus", Type_Model: "A340-600", Wake: "H"},
    {IATA: "351", Manufacturer: "Airbus", Type_Model: "A350-1000", Wake: "H"},
    {IATA: "358", Manufacturer: "Airbus", Type_Model: "A350-800", Wake: "H"},
    {IATA: "359", Manufacturer: "Airbus", Type_Model: "A350-900", Wake: "H"},
    {IATA: "380", Manufacturer: "Airbus", Type_Model: "A380", Wake: "H"},
    {IATA: "703", Manufacturer: "Boeing", Type_Model: "707-300", Wake: "H"},
    {IATA: "707", Manufacturer: "Boeing", Type_Model: "707/720", Wake: "H"},
    {IATA: "70F", Manufacturer: "Boeing", Type_Model: "707 Freighter", Wake: "H"},
    {IATA: "70M", Manufacturer: "Boeing", Type_Model: "707 Combi", Wake: "H"},
    {IATA: "717", Manufacturer: "Boeing", Type_Model: "717", Wake: "M"},
    {IATA: "721", Manufacturer: "Boeing", Type_Model: "727-100", Wake: "M"},
    {IATA: "722", Manufacturer: "Boeing", Type_Model: "727-200", Wake: "M"},
    {IATA: "727", Manufacturer: "Boeing", Type_Model: "727", Wake: "M"},
    {IATA: "72B", Manufacturer: "Boeing", Type_Model: "727-100 Mixed", Wake: "M"},
    {IATA: "72C", Manufacturer: "Boeing", Type_Model: "727-200 Mixed", Wake: "M"},
    {IATA: "72F", Manufacturer: "Boeing", Type_Model: "727 Freighter (-100/200)", Wake: "M"},
    {IATA: "72M", Manufacturer: "Boeing", Type_Model: "727 Combi", Wake: "M"},
    {IATA: "72S", Manufacturer: "Boeing", Type_Model: "727-200 Adv.", Wake: "M"},
    {IATA: "72X", Manufacturer: "Boeing", Type_Model: "727-100 Freighter", Wake: "M"},
    {IATA: "72Y", Manufacturer: "Boeing", Type_Model: "727-200 Freighter", Wake: "M"},
    {IATA: "731", Manufacturer: "Boeing", Type_Model: "737-100", Wake: "M"},
    {IATA: "732", Manufacturer: "Boeing", Type_Model: "737-200", Wake: "M"},
    {IATA: "733", Manufacturer: "Boeing", Type_Model: "737-300", Wake: "M"},
    {IATA: "734", Manufacturer: "Boeing", Type_Model: "737-400", Wake: "M"},
    {IATA: "735", Manufacturer: "Boeing", Type_Model: "737-500", Wake: "M"},
    {IATA: "736", Manufacturer: "Boeing", Type_Model: "737-600", Wake: "M"},
    {IATA: "737", Manufacturer: "Boeing", Type_Model: "737", Wake: "M"},
    {IATA: "738", Manufacturer: "Boeing", Type_Model: "737-800", Wake: "M"},
    {IATA: "739", Manufacturer: "Boeing", Type_Model: "737-900", Wake: "M"},
    {IATA: "73C", Manufacturer: "Boeing", Type_Model: "737-300 (winglets)", Wake: "M"},
    {IATA: "73F", Manufacturer: "Boeing", Type_Model: "737 Freighter", Wake: "M"},
    {IATA: "73G", Manufacturer: "Boeing", Type_Model: "737-700", Wake: "M"},
    {IATA: "73H", Manufacturer: "Boeing", Type_Model: "737-800 (winglets)", Wake: "M"},
    {IATA: "73J", Manufacturer: "Boeing", Type_Model: "737-900 (winglets)", Wake: "M"},
    {IATA: "73M", Manufacturer: "Boeing", Type_Model: "737-200 Combi", Wake: "M"},
    {IATA: "73W", Manufacturer: "Boeing", Type_Model: "737-700 (winglets)", Wake: "M"},
    {IATA: "73X", Manufacturer: "Boeing", Type_Model: "737-200 Freighter", Wake: "M"},
    {IATA: "73Y", Manufacturer: "Boeing", Type_Model: "737-300 Freighter", Wake: "M"},
    {IATA: "741", Manufacturer: "Boeing", Type_Model: "747-100", Wake: "H"},
    {IATA: "742", Manufacturer: "Boeing", Type_Model: "747-200", Wake: "H"},
    {IATA: "743", Manufacturer: "Boeing", Type_Model: "747-300", Wake: "H"},
    {IATA: "744", Manufacturer: "Boeing", Type_Model: "747-400", Wake: "H"},
    {IATA: "747", Manufacturer: "Boeing", Type_Model: "747", Wake: "H"},
    {IATA: "74C", Manufacturer: "Boeing", Type_Model: "747-200 Combi", Wake: "H"},
    {IATA: "74D", Manufacturer: "Boeing", Type_Model: "747-300 Combi", Wake: "H"},
    {IATA: "74E", Manufacturer: "Boeing", Type_Model: "747-400 Combi", Wake: "H"},
    {IATA: "74F", Manufacturer: "Boeing", Type_Model: "747 Freighter", Wake: "H"},
    {IATA: "74H", Manufacturer: "Boeing", Type_Model: "747-8i", Wake: "H"},
    {IATA: "74J", Manufacturer: "Boeing", Type_Model: "747-400 (Domestic)", Wake: "H"},
    {IATA: "74L", Manufacturer: "Boeing", Type_Model: "747SP", Wake: "H"},
    {IATA: "74M", Manufacturer: "Boeing", Type_Model: "747 Combi", Wake: "H"},
    {IATA: "74N", Manufacturer: "Boeing", Type_Model: "747-8F", Wake: "H"},
    {IATA: "74R", Manufacturer: "Boeing", Type_Model: "747SR", Wake: "H"},
    {IATA: "74T", Manufacturer: "Boeing", Type_Model: "747-100 Freighter", Wake: "H"},
    {IATA: "74U", Manufacturer: "Boeing", Type_Model: "747-300 / 747-200 SUD Freghter", Wake: "H"},
    {IATA: "74V", Manufacturer: "Boeing", Type_Model: "747SR Freighter", Wake: "H"},
    {IATA: "74X", Manufacturer: "Boeing", Type_Model: "747-200 Freighter", Wake: "H"},
    {IATA: "74Y", Manufacturer: "Boeing", Type_Model: "747-400 Freighter", Wake: "H"},
    {IATA: "752", Manufacturer: "Boeing", Type_Model: "757-200", Wake: "H"},
    {IATA: "753", Manufacturer: "Boeing", Type_Model: "757-300", Wake: "H"},
    {IATA: "757", Manufacturer: "Boeing", Type_Model: "757", Wake: "H"},
    {IATA: "75F", Manufacturer: "Boeing", Type_Model: "757 Freighter", Wake: "H"},
    {IATA: "75M", Manufacturer: "Boeing", Type_Model: "757 Mixed", Wake: "H"},
    {IATA: "75T", Manufacturer: "Boeing", Type_Model: "757-300 (winglets)", Wake: "H"},
    {IATA: "75W", Manufacturer: "Boeing", Type_Model: "757-200 (winglets)", Wake: "H"},
    {IATA: "762", Manufacturer: "Boeing", Type_Model: "767-200", Wake: "H"},
    {IATA: "763", Manufacturer: "Boeing", Type_Model: "767-300", Wake: "H"},
    {IATA: "764", Manufacturer: "Boeing", Type_Model: "767-400", Wake: "H"},
    {IATA: "767", Manufacturer: "Boeing", Type_Model: "767", Wake: "H"},
    {IATA: "76F", Manufacturer: "Boeing", Type_Model: "767 Freighter", Wake: "H"},
    {IATA: "76W", Manufacturer: "Boeing", Type_Model: "767-300 (winglets)", Wake: "H"},
    {IATA: "76X", Manufacturer: "Boeing", Type_Model: "767-200 Freighter", Wake: "H"},
    {IATA: "76Y", Manufacturer: "Boeing", Type_Model: "767-300 Freighter", Wake: "H"},
    {IATA: "772", Manufacturer: "Boeing", Type_Model: "777-200", Wake: "H"},
    {IATA: "773", Manufacturer: "Boeing", Type_Model: "777-300", Wake: "H"},
    {IATA: "777", Manufacturer: "Boeing", Type_Model: "777", Wake: "H"},
    {IATA: "77F", Manufacturer: "Boeing", Type_Model: "777 Freighter", Wake: "H"},
    {IATA: "77L", Manufacturer: "Boeing", Type_Model: "777-200LR", Wake: "H"},
    {IATA: "77W", Manufacturer: "Boeing", Type_Model: "777-300ER", Wake: "H"},
    {IATA: "788", Manufacturer: "Boeing", Type_Model: "787-8", Wake: "H"},
    {IATA: "789", Manufacturer: "Boeing", Type_Model: "787-9", Wake: "H"},
    {IATA: "A26", Manufacturer: "Antonow / Antonov", Type_Model: "An-26", Wake: "L"},
    {IATA: "A28", Manufacturer: "Antonow / Antonov", Type_Model: "An-28 / PZL Mielec M-28", Wake: "L"},
    {IATA: "A30", Manufacturer: "Antonow / Antonov", Type_Model: "An-30", Wake: "L"},
    {IATA: "A32", Manufacturer: "Antonow / Antonov", Type_Model: "An-32", Wake: "L"},
    {IATA: "A40", Manufacturer: "Antonow / Antonov", Type_Model: "An-140", Wake: "M"},
    {IATA: "A4F", Manufacturer: "Antonow / Antonov", Type_Model: "An-124", Wake: "H"},
    {IATA: "AB3", Manufacturer: "Airbus", Type_Model: "A300", Wake: "H"},
    {IATA: "AB4", Manufacturer: "Airbus", Type_Model: "A300B2/B4/C4", Wake: "H"},
    {IATA: "AB6", Manufacturer: "Airbus", Type_Model: "A300-600", Wake: "H"},
    {IATA: "ABB", Manufacturer: "Airbus", Type_Model: "A300-600ST Beluga", Wake: "H"},
    {IATA: "ABF", Manufacturer: "Airbus", Type_Model: "A300F", Wake: "H"},
    {IATA: "ABX", Manufacturer: "Airbus", Type_Model: "A300C4/F4 Freighter", Wake: "H"},
    {IATA: "ABY", Manufacturer: "Airbus", Type_Model: "A300-600F", Wake: "H"},
    {IATA: "ACD", Manufacturer: "Rockwell", Type_Model: "Commander/Turbo Commander", Wake: "L"},
    {IATA: "ACP", Manufacturer: "Rockwell", Type_Model: "Commander", Wake: "L"},
    {IATA: "AGH", Manufacturer: "Agusta / AgustaWestland", Type_Model: "A-109"},
    {IATA: "AN4", Manufacturer: "Antonow / Antonov", Type_Model: "An-24", Wake: "M"},
    {IATA: "AN6", Manufacturer: "Antonow / Antonov", Type_Model: "An-26 / An-30 / An-32", Wake: "M" },
    {IATA: "AN7", Manufacturer: "Antonow / Antonov", Type_Model: "An-72 / An-74", Wake: "M"},
    {IATA: "ANF", Manufacturer: "Antonow / Antonov", Type_Model: "An-12", Wake: "M"},
    {IATA: "APH", Manufacturer: "Eurocopter", Type_Model: "SA330 Puma / AS332 Super Puma"},	
    {IATA: "AR1", Manufacturer: "BAe", Type_Model: "Avro RJ100", Wake: "M"},
    {IATA: "AR7", Manufacturer: "BAe", Type_Model: "Avro RJ70", Wake: "M"},
    {IATA: "AR8", Manufacturer: "BAe", Type_Model: "Avro RJ85", Wake: "M"},
    {IATA: "ARJ", Manufacturer: "BAe", Type_Model: "Avro RJ70 / RJ85 / RJ100", Wake: "M"},
    {IATA: "AT4", Manufacturer: "ATR", Type_Model: "ATR 42-300 / 320", Wake: "M"},
    {IATA: "AT5", Manufacturer: "ATR", Type_Model: "ATR 42-500", Wake: "M"},
    {IATA: "AT7", Manufacturer: "ATR", Type_Model: "ATR 72", Wake: "M"},
    {IATA: "ATP", Manufacturer: "BAe", Type_Model: "ATP", Wake: "M"},
    {IATA: "ATR", Manufacturer: "ATR", Type_Model: "ATR 42 / ATR 72", Wake: "M"},
    {IATA: "B11", Manufacturer: "BAC", Type_Model: "One Eleven", Wake: "M"},
    {IATA: "B12", Manufacturer: "BAC", Type_Model: "One Eleven 200", Wake: "M"},
    {IATA: "B13", Manufacturer: "BAC", Type_Model: "One Eleven 300", Wake: "M"},
    {IATA: "B14", Manufacturer: "BAC", Type_Model: "One Eleven 400/7", Wake: "M"},
    {IATA: "B15", Manufacturer: "BAC", Type_Model: "One Eleven 500", Wake: "M"},
    {IATA: "B72", Manufacturer: "Boeing", Type_Model: "720B", Wake: "M"},
    {IATA: "BE1", Manufacturer: "Beech", Type_Model: "1900/1900C/1900D", Wake: "M"},
    {IATA: "BE2", Manufacturer: "Beech", Type_Model: "Beech twin piston", Wake: "L"},
    {IATA: "BEC", Manufacturer: "Beech", Type_Model: "Beech light aircraft", Wake: "L"},
    {IATA: "BEH", Manufacturer: "Beech", Type_Model: "1900D", Wake: "M"},
    {IATA: "BEP", Manufacturer: "Beech", Type_Model: "Beech singe piston", Wake: "L"},
    {IATA: "BES", Manufacturer: "Beech", Type_Model: "1900/1900C", Wake: "M"},
    {IATA: "BET", Manufacturer: "Beech", Type_Model: "Beech twin turboprop", Wake: "L"},
    {IATA: "BH2", Manufacturer: "Bell Helicopter", Type_Model: "Bell Helicopters"},	
    {IATA: "BNI", Manufacturer: "Britten Norman", Type_Model: "BN-2A/B Islander", Wake: "L"},
    {IATA: "BNT", Manufacturer: "Britten Norman", Type_Model: "BN-2A Mk III Trislander", Wake: "L"},
    {IATA: "CCJ", Manufacturer: "Canadair", Type_Model: "Challenger", Wake: "M"},
    {IATA: "CCX", Manufacturer: "Bombardier", Type_Model: "Global Express", Wake: "M"},
    {IATA: "CD2", Manufacturer: "GAF", Type_Model: "N22B / N24A Nomad", Wake: "L"},
    {IATA: "CL4", Manufacturer: "Canadair", Type_Model: "CL-44", Wake: "M"},
    {IATA: "CN1", Manufacturer: "Cessna", Type_Model: "Cessna single piston engine", Wake: "L"},
    {IATA: "CN2", Manufacturer: "Cessna", Type_Model: "Cessna twin piston engines", Wake: "L"},
    {IATA: "CNA", Manufacturer: "Cessna", Type_Model: "Cessna light aircraft", Wake: "L"},
    {IATA: "CNC", Manufacturer: "Cessna", Type_Model: "Cessna single turboprop engine", Wake: "L"},
    {IATA: "CNJ", Manufacturer: "Cessna", Type_Model: "Citation", Wake: "L"},
    {IATA: "CNT", Manufacturer: "Cessna", Type_Model: "Cessna twin turboprop engines", Wake: "L"},
    {IATA: "CR1", Manufacturer: "Canadair", Type_Model: "CRJ 100", Wake: "M"},
    {IATA: "CR2", Manufacturer: "Canadair", Type_Model: "CRJ 200", Wake: "M"},
    {IATA: "CR7", Manufacturer: "Canadair", Type_Model: "CRJ 700", Wake: "M"},
    {IATA: "CR9", Manufacturer: "Canadair", Type_Model: "CRJ 900", Wake: "M"},
    {IATA: "CRA", Manufacturer: "Canadair", Type_Model: "CRJ 705", Wake: "M"},
    {IATA: "CRF", Manufacturer: "Canadair", Type_Model: "CRJ Freighter", Wake: "M"},
    {IATA: "CRJ", Manufacturer: "Canadair", Type_Model: "CRJ", Wake: "M"},
    {IATA: "CRK", Manufacturer: "Canadair", Type_Model: "CRJ 1000", Wake: "M"},
    {IATA: "CRV", Manufacturer: "Sud-Est", Type_Model: "SE.210 Caravelle", Wake: "M"},
    {IATA: "CS1", Manufacturer: "Bombardier", Type_Model: "CSeries CS100", Wake: "M"},
    {IATA: "CS2", Manufacturer: "CASA", Type_Model: "212 Aviocar", Wake: "M"},
    {IATA: "CS3", Manufacturer: "Bombardier", Type_Model: "CSeries CS300", Wake: "M"},
    {IATA: "CS5", Manufacturer: "Airtech", Type_Model: "CN-235", Wake: "M"},
    {IATA: "CV4", Manufacturer: "Convair", Type_Model: "CV-440 Metropolitan", Wake: "M"},
    {IATA: "CV5", Manufacturer: "Convair", Type_Model: "CV-580", Wake: "M"},
    {IATA: "CVF", Manufacturer: "Convair", Type_Model: "CV-240 / 440 / 580 / 600 / 640 Freighter", Wake: "M"},
    {IATA: "CVR", Manufacturer: "Convair", Type_Model: "CV-240 / 440 / 580 / 600 / 640", Wake: "M"},
    {IATA: "CVV", Manufacturer: "Convair", Type_Model: "CV-240 Freighter", Wake: "M"},
    {IATA: "CVX", Manufacturer: "Convair", Type_Model: "CV-440 Freighter", Wake: "M"},
    {IATA: "CVY", Manufacturer: "Convair", Type_Model: "CV-580 / 600 / 640 Freighter", Wake: "M"},
    {IATA: "CWC", Manufacturer: "Curtiss", Type_Model: "C-46 Commando", Wake: "M"},
    {IATA: "D10", Manufacturer: "Douglas", Type_Model: "DC-10", Wake: "H"},
    {IATA: "D11", Manufacturer: "Douglas", Type_Model: "DC-10-10/15", Wake: "H"},
    {IATA: "D1C", Manufacturer: "Douglas", Type_Model: "DC-10-30/40", Wake: "H"},
    {IATA: "D1F", Manufacturer: "Douglas", Type_Model: "DC-10 Freighter", Wake: "H"},
    {IATA: "D1M", Manufacturer: "Douglas", Type_Model: "DC-10 Combi", Wake: "H"},
    {IATA: "D1X", Manufacturer: "Douglas", Type_Model: "DC-10-10 Freighter", Wake: "H"},
    {IATA: "D1Y", Manufacturer: "Douglas", Type_Model: "DC-10-30 / 40 Freighter", Wake: "H"},
    {IATA: "D28", Manufacturer: "Dornier", Type_Model: "Do 228", Wake: "L"},
    {IATA: "D38", Manufacturer: "Dornier", Type_Model: "Do 328", Wake: "M"},
    {IATA: "D3F", Manufacturer: "Douglas", Type_Model: "DC-3 Freighter", Wake: "M"},
    {IATA: "D6F", Manufacturer: "Douglas", Type_Model: "DC-6A/B/C Freighter", Wake: "M"},
    {IATA: "D8F", Manufacturer: "Douglas", Type_Model: "DC-8 Freighter", Wake: "H"},
    {IATA: "D8L", Manufacturer: "Douglas", Type_Model: "DC-8-62", Wake: "H"},
    {IATA: "D8M", Manufacturer: "Douglas", Type_Model: "DC-8 Combi", Wake: "H"},
    {IATA: "D8Q", Manufacturer: "Douglas", Type_Model: "DC-8-72", Wake: "H"},
    {IATA: "D8T", Manufacturer: "Douglas", Type_Model: "DC-8-50 Freighter", Wake: "H"},
    {IATA: "D8X", Manufacturer: "Douglas", Type_Model: "DC-8-61 / 62 / 63 Freighter", Wake: "H"},
    {IATA: "D8Y", Manufacturer: "Douglas", Type_Model: "DC-8-71 / 72 / 73 Freighter", Wake: "H"},
    {IATA: "D91", Manufacturer: "Douglas", Type_Model: "DC-9-10", Wake: "M"},
    {IATA: "D92", Manufacturer: "Douglas", Type_Model: "DC-9-20", Wake: "M"},
    {IATA: "D93", Manufacturer: "Douglas", Type_Model: "DC-9-30", Wake: "M"},
    {IATA: "D94", Manufacturer: "Douglas", Type_Model: "DC-9-40", Wake: "M"},
    {IATA: "D95", Manufacturer: "Douglas", Type_Model: "DC-9-50", Wake: "M"},
    {IATA: "D9C", Manufacturer: "Douglas", Type_Model: "DC-9-30 Freighter", Wake: "M"},
    {IATA: "D9F", Manufacturer: "Douglas", Type_Model: "DC-9 Freighter", Wake: "M"},
    {IATA: "D9X", Manufacturer: "Douglas", Type_Model: "DC-9-10 Freighter", Wake: "M"},
    {IATA: "DC3", Manufacturer: "Douglas", Type_Model: "DC-3", Wake: "M"},
    {IATA: "DC6", Manufacturer: "Douglas", Type_Model: "DC-6A/B", Wake: "M"},
    {IATA: "DC8", Manufacturer: "Douglas", Type_Model: "DC-8", Wake: "H"},
    {IATA: "DC9", Manufacturer: "Douglas", Type_Model: "DC-9", Wake: "M"},
    {IATA: "DF2", Manufacturer: "Dassault", Type_Model: "Falcon 10 / 100 / 20 / 200 / 2000", Wake: "M"},
    {IATA: "DF3", Manufacturer: "Dassault", Type_Model: "Falcon 50 / 900", Wake: "M"},
    {IATA: "DFL", Manufacturer: "Dassault", Type_Model: "Falcon", Wake: "M"},
    {IATA: "DH1", Manufacturer: "De Havilland Canada", Type_Model: "DHC-8-100 Dash 8 / 8Q", Wake: "M"},
    {IATA: "DH2", Manufacturer: "De Havilland Canada", Type_Model: "DHC-8-200 Dash 8 / 8Q", Wake: "M"},
    {IATA: "DH3", Manufacturer: "De Havilland Canada", Type_Model: "DHC-8-300 Dash 8 / 8Q", Wake: "M"},
    {IATA: "DH4", Manufacturer: "De Havilland Canada", Type_Model: "DHC-8-400 Dash 8Q", Wake: "M"},
    {IATA: "DH7", Manufacturer: "De Havilland Canada", Type_Model: "DHC-7 Dash 7", Wake: "M"},
    {IATA: "DH8", Manufacturer: "De Havilland Canada", Type_Model: "DHC-8 Dash 8", Wake: "M"},
    {IATA: "DHB", Manufacturer: "De Havilland Canada", Type_Model: "DHC-2 Beaver / Turbo Bever", Wake: "L"},
    {IATA: "DHC", Manufacturer: "De Havilland Canada", Type_Model: "DHC-4 Caribou", Wake: "M"},
    {IATA: "DHD", Manufacturer: "De Havilland", Type_Model: "DH.104 Dove", Wake: "L"},
    {IATA: "DHH", Manufacturer: "De Havilland", Type_Model: "DH.114 Heron", Wake: "L"},
    {IATA: "DHL", Manufacturer: "De Havilland Canada", Type_Model: "DHC-3 Turbo Otter", Wake: "L"},
    {IATA: "DHO", Manufacturer: "De Havilland Canada", Type_Model: "DHC-3 Otter / Turbo Otter", Wake: "L"},
    {IATA: "DHP", Manufacturer: "De Havilland Canada", Type_Model: "DHC-2 Beaver", Wake: "L"},
    {IATA: "DHR", Manufacturer: "De Havilland Canada", Type_Model: "DHC-2 Turbo-Beaver", Wake: "L"},
    {IATA: "DHS", Manufacturer: "De Havilland Canada", Type_Model: "DHC-3 Otter", Wake: "L"},
    {IATA: "DHT", Manufacturer: "De Havilland Canada", Type_Model: "DHC-6 Twin Otter", Wake: "L"},
    {IATA: "E70", Manufacturer: "EMBRAER", Type_Model: "EMB 170 / EMB 175", Wake: "M"},
    {IATA: "E90", Manufacturer: "EMBRAER", Type_Model: "EMB 190 / EMB 195", Wake: "M"},
    {IATA: "EM2", Manufacturer: "EMBRAER", Type_Model: "EMB 120 Brasilia", Wake: "L"},
    {IATA: "EMB", Manufacturer: "EMBRAER", Type_Model: "EMB 110 Bandeirante", Wake: "M"},
    {IATA: "EMJ", Manufacturer: "EMBRAER", Type_Model: "EMB 170 / EMB 190", Wake: "M"},
    {IATA: "ER3", Manufacturer: "EMBRAER", Type_Model: "ERJ 135", Wake: "M"},
    {IATA: "ER4", Manufacturer: "EMBRAER", Type_Model: "ERJ 145", Wake: "M"},
    {IATA: "ERD", Manufacturer: "EMBRAER", Type_Model: "ERJ 140", Wake: "M"},
    {IATA: "ERJ", Manufacturer: "EMBRAER", Type_Model: "ERJ 135 / ERJ 140 / ERJ 145", Wake: "M"},
    {IATA: "F21", Manufacturer: "Fokker", Type_Model: "F28 Fellowship 1000", Wake: "M"},
    {IATA: "F22", Manufacturer: "Fokker", Type_Model: "F28 Fellowship 2000", Wake: "M"},
    {IATA: "F23", Manufacturer: "Fokker", Type_Model: "F28 Fellowship 3000", Wake: "M"},
    {IATA: "F24", Manufacturer: "Fokker", Type_Model: "F28 Fellowship 4000", Wake: "M"},
    {IATA: "F27", Manufacturer: "Fokker", Type_Model: "F27 Friendship", Wake: "M"},
    {IATA: "F28", Manufacturer: "Fokker", Type_Model: "F28 Fellowship", Wake: "M"},
    {IATA: "F50", Manufacturer: "Fokker", Type_Model: "50", Wake: "M"},
    {IATA: "F70", Manufacturer: "Fokker", Type_Model: "70", Wake: "M"},
    {IATA: "FK7", Manufacturer: "Fairchild-Hiller", Type_Model: "FH-227", Wake: "M"},
    {IATA: "FRJ", Manufacturer: "Dornier", Type_Model: "328JET", Wake: "M"},
    {IATA: "GRG", Manufacturer: "Grumman", Type_Model: "G-21 Goose", Wake: "L"},
    {IATA: "GRJ", Manufacturer: "Gulfstream", Type_Model: "G-1159 Gulfstream II / III / IV / V", Wake: "M"},
    {IATA: "GRM", Manufacturer: "Gulfstream", Type_Model: "G-73 Turbo Mallard", Wake: "L"},
    {IATA: "GRS", Manufacturer: "Gulfstream", Type_Model: "G-159 Gulfstream I", Wake: "M"},
    {IATA: "H25", Manufacturer: "Hawker-Siddeley", Type_Model: "HS.125", Wake: "M"},
    {IATA: "HEC", Manufacturer: "Helio", Type_Model: "H-250 Courier / H-295 / 385 Super Courier", Wake: "L"},
    {IATA: "HS7", Manufacturer: "BAe", Type_Model: "HS.748", Wake: "M"},
    {IATA: "I14", Manufacturer: "Ilyushin", Type_Model: "IL-114", Wake: "M"},
    {IATA: "I93", Manufacturer: "Ilyushin", Type_Model: "IL-96-300", Wake: "H"},
    {IATA: "I9F", Manufacturer: "Ilyushin", Type_Model: "IL-96 Freighter", Wake: "H"},
    {IATA: "I9M", Manufacturer: "Ilyushin", Type_Model: "IL-96M", Wake: "H"},
    {IATA: "I9X", Manufacturer: "Ilyushin", Type_Model: "IL-96-300 Freighter", Wake: "H"},
    {IATA: "I9Y", Manufacturer: "Ilyushin", Type_Model: "IL-96T Freighter", Wake: "H"},
    {IATA: "IL6", Manufacturer: "Ilyushin", Type_Model: "IL-62", Wake: "H"},
    {IATA: "IL7", Manufacturer: "Ilyushin", Type_Model: "IL-76", Wake: "H"},
    {IATA: "IL8", Manufacturer: "Ilyushin", Type_Model: "IL-18", Wake: "M"},
    {IATA: "IL9", Manufacturer: "Ilyushin", Type_Model: "IL-96", Wake: "H"},
    {IATA: "ILW", Manufacturer: "Ilyushin", Type_Model: "IL-86", Wake: "H"},
    {IATA: "J31", Manufacturer: "BAe", Type_Model: "Jetstream 31", Wake: "L"},
    {IATA: "J32", Manufacturer: "BAe", Type_Model: "Jetstream 32", Wake: "L"},
    {IATA: "J41", Manufacturer: "BAe", Type_Model: "Jetstream 41", Wake: "M"},
    {IATA: "JST", Manufacturer: "BAe", Type_Model: "Jetstream 31 / 32 / 41", Wake: "L"},
    {IATA: "JU5", Manufacturer: "Junkers", Type_Model: "Ju 52/3M", Wake: "M"},
    {IATA: "L10", Manufacturer: "Lockheed", Type_Model: "L-1011 Tristar", Wake: "H"},
    {IATA: "L11", Manufacturer: "Lockheed", Type_Model: "L-1011 1 / 50 / 100 / 150 / 200 / 250 Tr", Wake: "H"},
    {IATA: "L15", Manufacturer: "Lockheed", Type_Model: "L-1011 500 Tristar", Wake: "H"},
    {IATA: "L1F", Manufacturer: "Lockheed", Type_Model: "L-1011 Tristar Freighter", Wake: "H"},
    {IATA: "L49", Manufacturer: "Lockheed", Type_Model: "L-1049 Super Constellation", Wake: "M"},
    {IATA: "L4T", Manufacturer: "LET", Type_Model: "L-410", Wake: "L"},
    {IATA: "LOE", Manufacturer: "Lockheed", Type_Model: "L-188 Electra", Wake: "M"},
    {IATA: "LOF", Manufacturer: "Lockheed", Type_Model: "L-188 Electra Freighter", Wake: "M"},
    {IATA: "LOH", Manufacturer: "Lockheed", Type_Model: "L-182 / 282 / 382 (L-100) Hercules", Wake: "M"},
    {IATA: "LOM", Manufacturer: "Lockheed", Type_Model: "L-188 Electra Mixed", Wake: "M"},
    {IATA: "LRJ", Manufacturer: "Learjet", Type_Model: "Gates Learjet", Wake: "M"},
    {IATA: "M11", Manufacturer: "McDonnell Douglas", Type_Model: "MD-11", Wake: "H"},
    {IATA: "M1F", Manufacturer: "McDonnell Douglas", Type_Model: "MD-11 Freighter", Wake: "H"},
    {IATA: "M1M", Manufacturer: "McDonnell Douglas", Type_Model: "MD-11 Mixed", Wake: "H"},
    {IATA: "M80", Manufacturer: "McDonnell Douglas", Type_Model: "MD-80", Wake: "M"},
    {IATA: "M81", Manufacturer: "McDonnell Douglas", Type_Model: "MD-81", Wake: "M"},
    {IATA: "M82", Manufacturer: "McDonnell Douglas", Type_Model: "MD-82", Wake: "M"},
    {IATA: "M83", Manufacturer: "McDonnell Douglas", Type_Model: "MD-83", Wake: "M"},
    {IATA: "M87", Manufacturer: "McDonnell Douglas", Type_Model: "MD-87", Wake: "M"},
    {IATA: "M88", Manufacturer: "McDonnell Douglas", Type_Model: "MD-88", Wake: "M"},
    {IATA: "M90", Manufacturer: "McDonnell Douglas", Type_Model: "MD-90", Wake: "M"},
    {IATA: "MBH", Manufacturer: "MBB", Type_Model: "Bo 105"},
    {IATA: "MD9", Manufacturer: "MD Helicopters", Type_Model: "MD900 Explorer"},	
    {IATA: "MIH", Manufacturer: "Mil", Type_Model: "Mi-8 / Mi-17 / Mi-171 / Mil-172" },
    {IATA: "MU2", Manufacturer: "Mitsubishi", Type_Model: "Mu-2", Wake: "L"},
    {IATA: "ND2", Manufacturer: "Nord / SNCAN",	Type_Model: "N.262", Wake: "M"},
    {IATA: "NDC", Manufacturer: "Aerospatiale / SNIAS", Type_Model: "SN.601 Corvette", Wake: "L"},
    {IATA: "NDE", Manufacturer: "Eurocopter", Type_Model: "AS350 Ecureuil / AS355 Ecureuil 2"},
    {IATA: "NDH", Manufacturer: "Eurocopter", Type_Model: "SA365C / SA365N Dauphin 2"},
    {IATA: "PA1", Manufacturer: "Piper", Type_Model: "Piper single piston engine", Wake: "L"},
    {IATA: "PA2", Manufacturer: "Piper", Type_Model: "Piper twin piston engines", Wake: "L"},
    {IATA: "PAG", Manufacturer: "Piper", Type_Model: "Piper light aircraft", Wake: "L"},
    {IATA: "PAT", Manufacturer: "Piper", Type_Model: "Piper twin turboprop engines", Wake: "L"},
    {IATA: "PL2", Manufacturer: "Pilatus", Type_Model: "PC-12", Wake: "L"},
    {IATA: "PL6", Manufacturer: "Pilatus", Type_Model: "PC-6 Turbo Porter", Wake: "L"},
    {IATA: "PN6", Manufacturer: "Partenavia", Type_Model: "P.68", Wake: "L"},
    {IATA: "S20", Manufacturer: "Saab", Type_Model: "2000", Wake: "M"},
    {IATA: "S58", Manufacturer: "Sikorsky", Type_Model: "S-58T"},
    {IATA: "S61", Manufacturer: "Sikorsky", Type_Model: "S-61"},
    {IATA: "S76", Manufacturer: "Sikorsky", Type_Model: "S-76"},
    {IATA: "SF3", Manufacturer: "Saab", Type_Model: "SF340A/B", Wake: "M"},
    {IATA: "SH3", Manufacturer: "Shorts", Type_Model: "SD.330", Wake: "M"},
    {IATA: "SH6", Manufacturer: "Shorts", Type_Model: "SD.360", Wake: "M"},
    {IATA: "SHB", Manufacturer: "Shorts", Type_Model: "SC-5 Belfast", Wake: "M"},
    {IATA: "SHS", Manufacturer: "Shorts", Type_Model: "SC-7 Skyvan", Wake: "L"},
    {IATA: "SSC", Manufacturer: "Aerospatiale / SNIAS", Type_Model: "Concorde", Wake: "H"},
    {IATA: "SWM", Manufacturer: "Fairchild-Swearingen", Type_Model: "SA26 / SA226 / SA227 Metro / Merlin", Wake: "L"},
    {IATA: "T20", Manufacturer: "Tupolev", Type_Model: "Tu-204 / Tu-214", Wake: "M"},
    {IATA: "TU3", Manufacturer: "Tupolev", Type_Model: "Tu-134", Wake: "M"},
    {IATA: "TU5", Manufacturer: "Tupolev", Type_Model: "Tu-154", Wake: "M"},
    {IATA: "VCV", Manufacturer: "Vickers", Type_Model: "Viscount", Wake: "M"},
    {IATA: "WWP", Manufacturer: "IAI", Type_Model: "1124 Westwind", Wake: "M"},
    {IATA: "YK2", Manufacturer: "Yakovlev / Jakovlev", Type_Mode: "Yak 42", Wake: "M"},
    {IATA: "YK4", Manufacturer: "Yakovlev / Jakovlev", Type_Mode: "Yak 40", Wake: "M"},
    {IATA: "YN2", Manufacturer: "HAMC / Harbin", Type_Mode: "Y12", Wake: "M"},
    {IATA: "YN7", Manufacturer: "Xian", Type_Model: "Yunshuji Y7", Wake: "M"},
    {IATA: "YS1", Manufacturer: "NAMC", Type_Mode: "YS-11", Wake: "M"},
    ]