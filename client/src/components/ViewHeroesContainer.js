import React from 'react';
import { connect } from 'react-redux'
import {
    writingText,
    setHeroForUpdate,
    setShowModal,
    clearProps,
    deleteHero,
    paginationStart
} from '../actions/getBd'
import ViewHeroes from "./ViewHeroes";


let mapStateToProps = state => ({

    HeroesArray: state.HeroesArray,
    id: state.id,
    totalPages: state.totalPages,
    currentPage: state.currentPage
})

let mapDispatchToProps = dispatch => ({
    writingText: (text, field) => dispatch(writingText(text, field)),
    setHeroForUpdate: HeroForUpdate => dispatch(setHeroForUpdate(HeroForUpdate)),
    setShowModal: (show) => dispatch(setShowModal(show)),
    clearProps: (show) => dispatch(clearProps(show)),
    paginationStart: (currentPage) => dispatch(paginationStart(currentPage)),
    deleteHero: (id, filename, currentPage) => dispatch(deleteHero(id, filename, currentPage)),

})

const ViewHeroesContainer = connect(mapStateToProps, mapDispatchToProps)(ViewHeroes)

export default ViewHeroesContainer














































