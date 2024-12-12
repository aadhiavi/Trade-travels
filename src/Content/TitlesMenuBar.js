import React, { useState } from 'react';
import { Menu, MenuItem, FocusableItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { sortedTitlesMenu } from '../Components/Content/ContentTitles/Store';
import { NavLink } from 'react-router-dom';
import "../Pages/Tour/Tours.css"

const TitlesMenuBar = () => {

    const [filter, setFilter] = useState('');

    return (
        <div className='titles-menu-bar'>
            <Menu menuStyle={{
                height: "400px",
                overflowY: "scroll",
                width: "100vw",
            }}
                menuButton={<MenuButton style={{
                    height: "50px",
                    width: "100%",
                    outline: "none",
                    border: "none",
                    backgroundColor: "wheat",
                    fontSize: "large",
                    color:'#664E00'
                }}>List of Places</MenuButton>}
                onMenuChange={(e) => e.open && setFilter('')}
            >
                <FocusableItem style={{
                    position: "sticky",
                    top: "0",
                    zIndex: "11"
                }}>
                    {({ ref }) => (
                        <input
                            ref={ref}
                            type="text"
                            placeholder="Type to filter"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            style={{
                                width: "100vw",
                                height: "50px",
                                padding: "0 25px",
                                outline: "none",
                                border: "none",
                                backgroundColor: "wheat",
                                fontSize: "large",
                                borderRadius: "10px",
                            }}
                        />
                    )}
                </FocusableItem>
                {sortedTitlesMenu.filter((listItem) =>
                    listItem.title.toLowerCase().includes(filter.toLowerCase())
                )
                    .map((listItem,index) => (
                        <MenuItem key={index}
                            style={{
                                width: "100%",
                            }}
                        ><NavLink to={listItem.link}>{listItem.title}</NavLink></MenuItem>
                    ))}
            </Menu>
        </div>
    )
}

export default TitlesMenuBar
