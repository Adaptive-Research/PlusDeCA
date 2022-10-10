import React, {useState} from "react";
import {Navigation} from 'react-minimal-side-navigation';
import Icon from "awesome-react-icons";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {useLocation, useNavigate} from "react-router-dom";


export function Sidebar(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const userMail = localStorage.getItem('userMail');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="container-fluid">
            <div
                onClick={() => setIsSidebarOpen(false)}
                className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
                    isSidebarOpen ? "block" : "hidden"
                }`}
            />
            <h4 className="mt-3 mb-3"> {userMail}</h4>

            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
                    isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
                }`}
            >
                <Navigation
                    activeItemId={location.pathname}
                    onSelect={({itemId}) => {
                        navigate(itemId);
                    }}
                    items={[
                        {
                            title: 'Mon entreprise',
                            elemBefore: () => <Icon name="book"/>,
                            subNav: [
                                {
                                    title: "ajouter",
                                    itemId: "/create_enterprise",
                                    elemBefore: () => <Icon name="plus"/>
                                },
                                {
                                    title: "Liste",
                                    itemId: "/list_trial",
                                    elemBefore: () => <Icon name="radio"/>
                                }
                            ]
                        }
                    ]}
                />
            </div>

            <div>
                <Navigation
                    activeItemId={location.pathname}
                    onSelect={({itemId}) => {
                        navigate(itemId);
                    }}
                    items={[
                        {
                            title: 'Mes Activités',
                            elemBefore: () => <Icon name="tag"/>,
                            subNav: [
                                {
                                    title: "ajouter",
                                    itemId: "/create_trial",
                                    elemBefore: () => <Icon name="plus"/>
                                },
                                {
                                    title: "Liste",
                                    itemId: "/list_trial",
                                    elemBefore: () => <Icon name="radio"/>
                                }
                            ]
                        }
                    ]}
                />
            </div>


            <div>
                <Navigation
                    activeItemId={location.pathname}
                    onSelect={({itemId}) => {
                        navigate(itemId);
                    }}
                    items={[
                        {
                            title: 'Profil',
                            elemBefore: () => <Icon name="user"/>,
                            subNav: [
                                {
                                    title: "editer",
                                    itemId: "/create_trial",
                                    elemBefore: () => <Icon name="edit-pencil-simple"/>
                                },
                                {
                                    title: "details",
                                    itemId: "/list_trial",
                                    elemBefore: () => <Icon name="eye"/>
                                }
                            ]
                        }
                    ]}
                />
            </div>
            <div>
                <Navigation
                    activeItemId={location.pathname}
                    onSelect={({itemId}) => {
                        localStorage.clear();
                        localStorage.setItem('logged', JSON.stringify(false));
                        navigate(itemId);
                    }}
                    items={[
                        {
                            title: 'Déconnexion',
                            elemBefore: () => <Icon name="log-out"/>,
                            itemId: "/"
                        }
                    ]}
                />
            </div>
        </div>
    );
}
