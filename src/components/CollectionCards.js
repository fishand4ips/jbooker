import React from "react"
import Cards from "./Cards";

export const CollectionCards = (props) => {
    let info = props.store;
    return (
        <>
            <Cards nameBook={props.store.name.CLEAN_CODE} author={props.store.author.Martin}
                   photo={props.store.images.cleanCode} bookInPdf={props.store.bookInPdf.cleanCode_pdf}/>
            <Cards nameBook={props.store.name.ROCKING_ALGORITHMS} author={props.store.author.Aditya_Bhargava}
                   photo={props.store.images.rockingAlgorithms}/>
            <Cards nameBook={props.store.name.SCHILDT_BEGINNER} author={props.store.author.Herbert_Schildt}
                   photo={props.store.images.schildt_beginner}/>
            <Cards nameBook={props.store.name.HEAD_FIRST_PATTERN} author={props.store.author.Frimen_and_Robson}
                   photo={props.store.images.patterny_proektirovaniya_head_first}/>
            <Cards nameBook={props.store.name.LEARN_SQL} author={props.store.author.Alan_Bule}
                   photo={props.store.images.learn_sql}/>
            <Cards nameBook={props.store.name.ART_PROGRAMMING} author={props.store.author.Donald_Knut}
                   photo={props.store.images.art_programming}/>
            <Cards nameBook={props.store.name.EFFECTIVE_PROGRAMMING} author={props.store.author.Joshua_Bloch}
                   photo={props.store.images.effective_programming}
                   bookInPdf={props.store.bookInPdf.effective_programming_pdf}/>
            <Cards nameBook={props.store.name.PERFECT_CODE} author={props.store.author.Steve_Makkonel}
                   photo={props.store.images.perfect_code} bookInPdf={props.store.bookInPdf.perfect_code_pdf}/>
            <Cards nameBook={props.store.name.LEARN_JAVA} author={props.store.author.Bates_and_Sera}
                   photo={props.store.images.learn_java} bookInPdf={props.store.bookInPdf.learn_java_pdf}/>
            <Cards nameBook={props.store.name.OOP_PATTERNS_ARCHITECT} author={props.store.author.Gamma_Helm_Jonson_Vlissides}
                    photo={props.store.images.oop_patterns_architect} bookInPdf={props.store.bookInPdf.oop_patterns_architect_pdf}/>
            <Cards nameBook={props.store.name.MAP_CULTURE_DIFF} author={props.store.author.Erin_Meer}
                    photo={props.store.images.map_culture_diff}/>
            <Cards nameBook={props.store.name.JUST_FOR_FUN} author={props.store.author.Linus_Diamond}
                    photo={props.store.images.just_for_fun} bookInPdf={props.store.bookInPdf.just_for_fun_pdf}/>
        </>
    )
};