import React from "react";
import {Navigation} from 'react-minimal-side-navigation';
import Icon from "awesome-react-icons";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {useLocation, useNavigate} from "react-router-dom";


export function Sidebar(props) {
    const location = useLocation();
    const navigate = useNavigate();


    return (
        <div className="container-fluid">
            <h4 className="mt-3 mb-3"> TEST</h4>
            <Navigation
                activeItemId={location.pathname}
                onSelect={({itemId}) => {
                    navigate(itemId);
                }}
                items={[
                    {
                        title: 'Mon journal',
                        elemBefore: () => <Icon name="check-circle"/>,
                        subNav: [
                            {
                                title: "Create",
                                itemId: "/create_trial",
                                // Optional
                                elemBefore: () => <Icon name="plus"/>
                            },
                            {
                                title: "List",
                                itemId: "/list_trial",
                                elemBefore: () => <Icon name="radio"/>
                            }
                        ]
                    },
                    {
                        title: 'Mon entreprise',
                        itemId: '/feed',
                        elemBefore: () => <Icon name="bell"/>,
                    },
                    {
                        title: 'Qui suis-je ?',
                        elemBefore: () => <Icon name="star"/>,
                        subNav: [
                            {
                                title: "Ma fiche",
                                itemId: "/create_survey",
                                elemBefore: () => <Icon name="plus"/>
                            },
                            {
                                title: "Mon parcours",
                                itemId: "/list_survey",
                                elemBefore: () => <Icon name="radio"/>
                            }
                        ]
                    },
                    {
                        title: 'Créer un article',
                        elemBefore: () => <Icon name="check-square"/>,
                        subNav: [
                            {
                                title: "Create",
                                itemId: "/create_quiz",
                                // Optional
                                elemBefore: () => <Icon name="plus"/>
                            },
                            {
                                title: "List",
                                itemId: "/list_quiz",
                                elemBefore: () => <Icon name="radio"/>
                            }
                        ]
                    },

                    {
                        title: 'Mes services',
                        itemId: '/share',
                        elemBefore: () => <Icon name="share-other"/>,
                        subNav: [
                            {
                                title: "Survey",
                                itemId: "/share/survey",
                                elemBefore: () => <Icon name="star"/>
                            },
                            {
                                title: "Quiz",
                                itemId: "/share/quiz",
                                elemBefore: () => <Icon name="check-square"/>
                            }
                        ]
                    },
                    {
                        title: 'Paramètres',
                        itemId: '/settings',
                        elemBefore: () => <Icon name="settings"/>,
                        subNav: [
                            {
                                title: "Profile",
                                itemId: "/settings/profile",
                                elemBefore: () => <Icon name="user"/>
                            },
                            {
                                title: "Account",
                                itemId: "/settings/account",
                                elemBefore: () => <Icon name="circle"/>
                            },
                            {
                                title: "Help",
                                itemId: "/settings/help",
                                elemBefore: () => <Icon name="help-circle"/>
                            }
                        ]
                    },
                ]}
            />

        </div>
    );
}
