import { CardHeader, CardMedia, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import HeaderDefault from "../../components/HeaderDefault/HeaderDefault";
import { MovieCard, MovieCardActions, MovieCardAverage, MovieCardButton, MovieCardContent, MovieCardOverview, MovieCardTitle, MoviesCardContainer, MoviesContainer, MoviesFormStyled, MoviesMainContainer, MoviesPageContainer, SearchContainer, WelcomeContainer } from "./styles";
import { NextPage } from "next";
import { getMoviesService } from "../../services";
import { IMovies } from "../../services/getMovies/types";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import { IUser } from "../../services/auth/types";
import { debounce } from "lodash";
import { motion } from "framer-motion";
import { useRouter } from "next/router";


const MoviesPage: NextPage = () => {
  const router = useRouter();
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [page, setPage] = useState(1);
  const [user, setUser] = useState<IUser>();
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      setUser(JSON.parse(localStorage.getItem('user') ?? ''));
    } else {
      router.push('/');
    }
  }, []);

  useEffect(() => { handleGetMovies() }, [page]);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => {
    const newString = event?.target.value;
    setIsSearching(newString && newString.length > 0 ? true : false);
    handleSearchMovies(newString ?? '');
  };

  const debouncedHandleSearch = useCallback(debounce(handleSearch, 300), []);

  const handleGetMovies = async () => {
    try {
      const { results } = await getMoviesService.getMovies(page);
      const list = [...movies, ...results];
      setMovies(list);
    } catch (error) {
      console.log(error);
    };
  };

  const handleSearchMovies = async (search: string) => {
    try {
      const { results } = await getMoviesService.searchMovies(search);
      setMovies(results);
    } catch (error) {
      console.log(error);
    };
  };

  const handleLoadMoreButtonClick = () => {
    setIsLoading(true);
    setPage(page + 1);
    setIsLoading(false);
  };

  const handleBackClick = () => {
    localStorage.clear();
    router.push('login');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MoviesPageContainer>
        <Head>
          <title>IgnisFlix | Movies</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <MoviesMainContainer>
          <HeaderDefault isIconExists={true} onClick={() => { handleBackClick() }} />

          <WelcomeContainer><span>Bem vindo, </span>{user?.name}</WelcomeContainer>
          <SearchContainer>

            <MoviesFormStyled>
              <OutlinedInput
                placeholder="Buscar filme"
                onChange={debouncedHandleSearch}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      type="button"
                      edge="end"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>}
              />

            </MoviesFormStyled>
          </SearchContainer>

          <MoviesContainer>
            <h1>Filmes</h1>
            <MoviesCardContainer>
              {movies.map(movie => (
                <MovieCard key={movie.id}>
                  <CardHeader sx={{ height: 0, padding: 0 }}
                    avatar={
                      <MovieCardAverage>
                        {`${movie.vote_average * 10}%`}
                      </MovieCardAverage>
                    }
                  >
                  </CardHeader>
                  <CardMedia
                    component="img"
                    height="230"
                    image={movie.poster_path}
                  />
                  <MovieCardContent>
                    <MovieCardTitle>
                      {movie.title}
                    </MovieCardTitle>
                    <MovieCardOverview>
                      {movie.overview}
                    </MovieCardOverview>

                  </MovieCardContent>
                  <MovieCardActions>
                    <MovieCardButton>
                      ver mais
                    </MovieCardButton>
                  </MovieCardActions>
                </MovieCard>
              ))}

            </MoviesCardContainer>
          </MoviesContainer>

          {!isSearching && <ButtonDefault text="Ver mais" onClick={!isLoading ? () => { handleLoadMoreButtonClick() } : () => { }} />}

        </MoviesMainContainer>
      </MoviesPageContainer>
    </motion.div>
  )
}

export default MoviesPage;