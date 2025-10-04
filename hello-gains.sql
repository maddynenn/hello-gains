--
-- PostgreSQL database dump
--

\restrict 8AXAluace9ZciU2fGLDPoewsfgFYEDk1e2thBuLHqSSkifH68lbGnm5LQQ6cmRq

-- Dumped from database version 17.2 (Postgres.app)
-- Dumped by pg_dump version 17.6 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: goal; Type: TABLE; Schema: public; Owner: hsalce
--

CREATE TABLE public.goal (
    goalid character varying(255) NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.goal OWNER TO hsalce;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: hsalce
--

CREATE TABLE public.orders (
    orderid character varying(255) NOT NULL,
    userid character varying(255) NOT NULL,
    packid character varying(255) NOT NULL
);


ALTER TABLE public.orders OWNER TO hsalce;

--
-- Name: packs; Type: TABLE; Schema: public; Owner: hsalce
--

CREATE TABLE public.packs (
    packid character varying(255) NOT NULL,
    productid character varying(255) NOT NULL,
    goalid character varying(255) NOT NULL
);


ALTER TABLE public.packs OWNER TO hsalce;

--
-- Name: products; Type: TABLE; Schema: public; Owner: hsalce
--

CREATE TABLE public.products (
    productid character varying(255) NOT NULL,
    productname character varying(255) NOT NULL,
    price numeric(10,2) NOT NULL,
    calories numeric(10,2),
    protein numeric(10,2),
    carbohydrates numeric(10,2),
    fats numeric(10,2)
);


ALTER TABLE public.products OWNER TO hsalce;

--
-- Name: users; Type: TABLE; Schema: public; Owner: hsalce
--

CREATE TABLE public.users (
    userid character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    age integer,
    sex character varying(50),
    height numeric(10,2),
    weight numeric(10,2),
    goalid character varying(255)
);


ALTER TABLE public.users OWNER TO hsalce;

--
-- Data for Name: goal; Type: TABLE DATA; Schema: public; Owner: hsalce
--

COPY public.goal (goalid, name) FROM stdin;
1	Weight Loss
2	Muscle Gain
3	Maintenance
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: hsalce
--

COPY public.orders (orderid, userid, packid) FROM stdin;
\.


--
-- Data for Name: packs; Type: TABLE DATA; Schema: public; Owner: hsalce
--

COPY public.packs (packid, productid, goalid) FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: hsalce
--

COPY public.products (productid, productname, price, calories, protein, carbohydrates, fats) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: hsalce
--

COPY public.users (userid, username, password, email, age, sex, height, weight, goalid) FROM stdin;
1	jack	jack123	jack@example.com	28	M	78.00	175.00	2
2	armina	armina123	armina@example.com	24	F	62.00	165.00	1
3	liz	liz123	liz@example.com	30	F	70.00	168.00	3
4	owen	owen123	owen@example.com	26	M	82.00	180.00	2
\.


--
-- Name: goal goal_pkey; Type: CONSTRAINT; Schema: public; Owner: hsalce
--

ALTER TABLE ONLY public.goal
    ADD CONSTRAINT goal_pkey PRIMARY KEY (goalid);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: hsalce
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (orderid);


--
-- Name: packs packs_pkey; Type: CONSTRAINT; Schema: public; Owner: hsalce
--

ALTER TABLE ONLY public.packs
    ADD CONSTRAINT packs_pkey PRIMARY KEY (packid);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: hsalce
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (productid);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: hsalce
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (userid);


--
-- Name: users fk_users_goal; Type: FK CONSTRAINT; Schema: public; Owner: hsalce
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT fk_users_goal FOREIGN KEY (goalid) REFERENCES public.goal(goalid);


--
-- Name: orders orders_packid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hsalce
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_packid_fkey FOREIGN KEY (packid) REFERENCES public.packs(packid);


--
-- Name: orders orders_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hsalce
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(userid);


--
-- Name: packs packs_goalid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hsalce
--

ALTER TABLE ONLY public.packs
    ADD CONSTRAINT packs_goalid_fkey FOREIGN KEY (goalid) REFERENCES public.goal(goalid);


--
-- Name: packs packs_productid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hsalce
--

ALTER TABLE ONLY public.packs
    ADD CONSTRAINT packs_productid_fkey FOREIGN KEY (productid) REFERENCES public.products(productid);


--
-- Name: users users_goalid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hsalce
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_goalid_fkey FOREIGN KEY (goalid) REFERENCES public.goal(goalid);


--
-- PostgreSQL database dump complete
--

\unrestrict 8AXAluace9ZciU2fGLDPoewsfgFYEDk1e2thBuLHqSSkifH68lbGnm5LQQ6cmRq

