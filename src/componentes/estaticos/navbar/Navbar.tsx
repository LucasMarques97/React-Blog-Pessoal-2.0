import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import TokenState from '../../../store/tokens/tokenReducer';
import { addToken } from '../../../store/tokens/action';

function Navbar() {

    const navigate = useNavigate()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    const dispatch = useDispatch()
    
    function goLogout() {
        dispatch(addToken(''))
        navigate('/login')
    }

    /* navbar componente e o if, para a navbar não aparecer quando tiver logado com email e senha na tela de cadastro */
    var navbarComponent

    if (token != '') {
        navbarComponent =
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>


                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/posts' className='text-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/temas' className='text-none'>
                            <Box mx={1} className='cursor'>

                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/formularioTema' className='text-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;