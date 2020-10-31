import cleanCode from "./assets/img/clean_code.jpg"
import rockingAlgorithms from "./assets/img/rocking_algo.jpg"
import schildt_beginner from "./assets/img/schildt_beginner.jpg"

export let store = {
    name: {
        CLEAN_CODE: "Clean Code",
        ROCKING_ALGORITHMS: "Грокаем алгоритмы",
        SCHILDT_BEGINNER: "Java 8. Руководство для начинающих"
    },
    description: {
        d_CLEAN_CODE: "",
        d_ROCKING_ALGORITHMS: "",
        d_SCHILDT_BEGINNER: "",
    },
    author: {
        Martin: "Robert Cecil Martin",
        Herbert_Schildt: "Герберт Шилдт",
        Aditya_Bhargava: "Адитья Бхаргава",
    },
    images: {
        cleanCode: cleanCode,
        rockingAlgorithms: rockingAlgorithms,
        schildt_beginner: schildt_beginner,
    }
};