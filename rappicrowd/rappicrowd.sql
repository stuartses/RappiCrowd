--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO rappicrowd;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO rappicrowd;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO rappicrowd;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO rappicrowd;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO rappicrowd;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO rappicrowd;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.auth_user OWNER TO rappicrowd;

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO rappicrowd;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_groups_id_seq OWNER TO rappicrowd;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO rappicrowd;

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO rappicrowd;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_user_permissions_id_seq OWNER TO rappicrowd;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO rappicrowd;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO rappicrowd;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO rappicrowd;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO rappicrowd;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO rappicrowd;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO rappicrowd;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_cities; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public."rappicrowdContainer_cities" (
    "cityId" integer NOT NULL,
    "cityName" character varying(256) NOT NULL,
    "cityCreatedAt" timestamp with time zone NOT NULL,
    "cityUpdatedAt" timestamp with time zone NOT NULL,
    "cityCountryId_id" integer NOT NULL,
    "cityStateId_id" integer NOT NULL
);


ALTER TABLE public."rappicrowdContainer_cities" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_cities_cityId_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public."rappicrowdContainer_cities_cityId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."rappicrowdContainer_cities_cityId_seq" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_cities_cityId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public."rappicrowdContainer_cities_cityId_seq" OWNED BY public."rappicrowdContainer_cities"."cityId";


--
-- Name: rappicrowdContainer_countries; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public."rappicrowdContainer_countries" (
    "countryId" integer NOT NULL,
    "countryName" character varying(256) NOT NULL,
    "countryCreatedAt" timestamp with time zone NOT NULL,
    "countryUpdatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."rappicrowdContainer_countries" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_countries_countryId_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public."rappicrowdContainer_countries_countryId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."rappicrowdContainer_countries_countryId_seq" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_countries_countryId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public."rappicrowdContainer_countries_countryId_seq" OWNED BY public."rappicrowdContainer_countries"."countryId";


--
-- Name: rappicrowdContainer_currencies; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public."rappicrowdContainer_currencies" (
    "currencyId" integer NOT NULL,
    "currencyName" character varying(256) NOT NULL,
    "currencyCreatedAt" timestamp with time zone NOT NULL,
    "currencyUpdatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."rappicrowdContainer_currencies" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_currencies_currencyId_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public."rappicrowdContainer_currencies_currencyId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."rappicrowdContainer_currencies_currencyId_seq" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_currencies_currencyId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public."rappicrowdContainer_currencies_currencyId_seq" OWNED BY public."rappicrowdContainer_currencies"."currencyId";


--
-- Name: rappicrowdContainer_docutypes; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public."rappicrowdContainer_docutypes" (
    "docutypeId" integer NOT NULL,
    "docutypeName" character varying(256) NOT NULL,
    "docutypeCreatedAt" timestamp with time zone NOT NULL,
    "docutypeUpdatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."rappicrowdContainer_docutypes" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_docutypes_docutypeId_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public."rappicrowdContainer_docutypes_docutypeId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."rappicrowdContainer_docutypes_docutypeId_seq" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_docutypes_docutypeId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public."rappicrowdContainer_docutypes_docutypeId_seq" OWNED BY public."rappicrowdContainer_docutypes"."docutypeId";


--
-- Name: rappicrowdContainer_educationlevels; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public."rappicrowdContainer_educationlevels" (
    "educationLevelId" integer NOT NULL,
    "educationLevelName" character varying(256) NOT NULL,
    "educationLevelCreatedAt" timestamp with time zone NOT NULL,
    "educationLevelUpdatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."rappicrowdContainer_educationlevels" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_educationlevels_educationLevelId_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public."rappicrowdContainer_educationlevels_educationLevelId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."rappicrowdContainer_educationlevels_educationLevelId_seq" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_educationlevels_educationLevelId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public."rappicrowdContainer_educationlevels_educationLevelId_seq" OWNED BY public."rappicrowdContainer_educationlevels"."educationLevelId";


--
-- Name: rappicrowdContainer_investors; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public."rappicrowdContainer_investors" (
    "investorCed" character varying(256) NOT NULL,
    "investorName" character varying(256) NOT NULL,
    "investorLastName" character varying(256) NOT NULL,
    "investorCelular" character varying(256) NOT NULL,
    "investorAddress" character varying(256) NOT NULL,
    "investorCreatedAt" timestamp with time zone NOT NULL,
    "investorUpdatedAt" timestamp with time zone NOT NULL,
    "investorPassword" text NOT NULL,
    "investorEmail" character varying(256) NOT NULL,
    "investorCedCoutryId_id" integer NOT NULL,
    "investorCedDocutypeId_id" integer NOT NULL,
    "investorCityId_id" integer NOT NULL,
    "investorStateId_id" integer NOT NULL
);


ALTER TABLE public."rappicrowdContainer_investors" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_investorsperworkers; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public."rappicrowdContainer_investorsperworkers" (
    "investorPerWorkerId" integer NOT NULL,
    "investorPerWorkerAmount" integer NOT NULL,
    "investorPerWorkerCreatedAt" timestamp with time zone NOT NULL,
    "investorPerWorkerUpdatedAt" timestamp with time zone NOT NULL,
    "investorPerWorkerCurrencyId_id" integer NOT NULL,
    "investorPerWorkerInvestorCed_id" character varying(256) NOT NULL,
    "investorPerWorkerWorkerCed_id" character varying(256) NOT NULL
);


ALTER TABLE public."rappicrowdContainer_investorsperworkers" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_investorsperworkers_investorPerWorkerId_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public."rappicrowdContainer_investorsperworkers_investorPerWorkerId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."rappicrowdContainer_investorsperworkers_investorPerWorkerId_seq" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_investorsperworkers_investorPerWorkerId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public."rappicrowdContainer_investorsperworkers_investorPerWorkerId_seq" OWNED BY public."rappicrowdContainer_investorsperworkers"."investorPerWorkerId";


--
-- Name: rappicrowdContainer_states; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public."rappicrowdContainer_states" (
    "stateId" integer NOT NULL,
    "stateName" character varying(256) NOT NULL,
    "stateCreatedAt" timestamp with time zone NOT NULL,
    "stateUpdatedAt" timestamp with time zone NOT NULL,
    "stateCountryId_id" integer NOT NULL
);


ALTER TABLE public."rappicrowdContainer_states" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_states_stateId_seq; Type: SEQUENCE; Schema: public; Owner: rappicrowd
--

CREATE SEQUENCE public."rappicrowdContainer_states_stateId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."rappicrowdContainer_states_stateId_seq" OWNER TO rappicrowd;

--
-- Name: rappicrowdContainer_states_stateId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rappicrowd
--

ALTER SEQUENCE public."rappicrowdContainer_states_stateId_seq" OWNED BY public."rappicrowdContainer_states"."stateId";


--
-- Name: rappicrowdContainer_workers; Type: TABLE; Schema: public; Owner: rappicrowd
--

CREATE TABLE public."rappicrowdContainer_workers" (
    "workerCed" character varying(256) NOT NULL,
    "workerName" character varying(256) NOT NULL,
    "workerLastName" character varying(256) NOT NULL,
    "workerCelular" character varying(256) NOT NULL,
    "workerAddress" character varying(256) NOT NULL,
    "workerSpentsPerMonth" integer NOT NULL,
    "workerEarningsPerMonth" integer NOT NULL,
    "workerLabourHoursPerDay" integer NOT NULL,
    "workerCreatedAt" timestamp with time zone NOT NULL,
    "workerUpdatedAt" timestamp with time zone NOT NULL,
    "workerBirthday" date NOT NULL,
    "workerPassword" text NOT NULL,
    "workerPsychoText" text NOT NULL,
    "workerLicenseDriver" character varying(256) NOT NULL,
    "workerDaysPerWeek" integer NOT NULL,
    "workerEmail" character varying(256) NOT NULL,
    "workerTwitter" character varying(256) NOT NULL,
    "workerFacebook" character varying(256) NOT NULL,
    "workerCedCountryId_id" integer NOT NULL,
    "workerCedDocutypeId_id" integer NOT NULL,
    "workerCityId_id" integer NOT NULL,
    "workerCurrencyId_id" integer NOT NULL,
    "workerEducationLevelId_id" integer NOT NULL,
    "workerStateId_id" integer NOT NULL
);


ALTER TABLE public."rappicrowdContainer_workers" OWNER TO rappicrowd;

--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- Name: auth_user_groups id; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Name: rappicrowdContainer_cities cityId; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_cities" ALTER COLUMN "cityId" SET DEFAULT nextval('public."rappicrowdContainer_cities_cityId_seq"'::regclass);


--
-- Name: rappicrowdContainer_countries countryId; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_countries" ALTER COLUMN "countryId" SET DEFAULT nextval('public."rappicrowdContainer_countries_countryId_seq"'::regclass);


--
-- Name: rappicrowdContainer_currencies currencyId; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_currencies" ALTER COLUMN "currencyId" SET DEFAULT nextval('public."rappicrowdContainer_currencies_currencyId_seq"'::regclass);


--
-- Name: rappicrowdContainer_docutypes docutypeId; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_docutypes" ALTER COLUMN "docutypeId" SET DEFAULT nextval('public."rappicrowdContainer_docutypes_docutypeId_seq"'::regclass);


--
-- Name: rappicrowdContainer_educationlevels educationLevelId; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_educationlevels" ALTER COLUMN "educationLevelId" SET DEFAULT nextval('public."rappicrowdContainer_educationlevels_educationLevelId_seq"'::regclass);


--
-- Name: rappicrowdContainer_investorsperworkers investorPerWorkerId; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_investorsperworkers" ALTER COLUMN "investorPerWorkerId" SET DEFAULT nextval('public."rappicrowdContainer_investorsperworkers_investorPerWorkerId_seq"'::regclass);


--
-- Name: rappicrowdContainer_states stateId; Type: DEFAULT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_states" ALTER COLUMN "stateId" SET DEFAULT nextval('public."rappicrowdContainer_states_stateId_seq"'::regclass);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add user	4	add_user
14	Can change user	4	change_user
15	Can delete user	4	delete_user
16	Can view user	4	view_user
17	Can add content type	5	add_contenttype
18	Can change content type	5	change_contenttype
19	Can delete content type	5	delete_contenttype
20	Can view content type	5	view_contenttype
21	Can add session	6	add_session
22	Can change session	6	change_session
23	Can delete session	6	delete_session
24	Can view session	6	view_session
25	Can add countries	7	add_countries
26	Can change countries	7	change_countries
27	Can delete countries	7	delete_countries
28	Can view countries	7	view_countries
29	Can add currencies	8	add_currencies
30	Can change currencies	8	change_currencies
31	Can delete currencies	8	delete_currencies
32	Can view currencies	8	view_currencies
33	Can add docutypes	9	add_docutypes
34	Can change docutypes	9	change_docutypes
35	Can delete docutypes	9	delete_docutypes
36	Can view docutypes	9	view_docutypes
37	Can add education levels	10	add_educationlevels
38	Can change education levels	10	change_educationlevels
39	Can delete education levels	10	delete_educationlevels
40	Can view education levels	10	view_educationlevels
41	Can add states	11	add_states
42	Can change states	11	change_states
43	Can delete states	11	delete_states
44	Can view states	11	view_states
45	Can add cities	12	add_cities
46	Can change cities	12	change_cities
47	Can delete cities	12	delete_cities
48	Can view cities	12	view_cities
49	Can add investors	13	add_investors
50	Can change investors	13	change_investors
51	Can delete investors	13	delete_investors
52	Can view investors	13	view_investors
53	Can add workers	14	add_workers
54	Can change workers	14	change_workers
55	Can delete workers	14	delete_workers
56	Can view workers	14	view_workers
57	Can add investors per workers	15	add_investorsperworkers
58	Can change investors per workers	15	change_investorsperworkers
59	Can delete investors per workers	15	delete_investorsperworkers
60	Can view investors per workers	15	view_investorsperworkers
\.


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
1	pbkdf2_sha256$180000$brEHepfRch8f$gR1oB5t95ssugbnZ/RIf6IwDZ+5CZhWCL2ys9MdS70E=	2020-05-31 03:34:30.278332+00	t	rappicrowd			orlago250183@gmail.com	t	t	2020-05-29 14:57:18.566751+00
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2020-05-31 03:36:38.66554+00	1	Colombia	1	[{"added": {}}]	7	1
2	2020-05-31 03:37:10.971449+00	1	Valle del Cauca	1	[{"added": {}}]	11	1
3	2020-05-31 03:37:27.802504+00	1	Cali	1	[{"added": {}}]	12	1
4	2020-05-31 03:37:52.906838+00	1	Pregrado	1	[{"added": {}}]	10	1
5	2020-05-31 03:38:17.050824+00	2	Postgrado	1	[{"added": {}}]	10	1
6	2020-05-31 03:38:24.755258+00	3	Bachillerato	1	[{"added": {}}]	10	1
7	2020-05-31 03:38:31.83563+00	4	Tecnico	1	[{"added": {}}]	10	1
8	2020-05-31 03:38:39.274401+00	5	Tecnologico	1	[{"added": {}}]	10	1
9	2020-05-31 03:39:00.887549+00	1	Peso Colombiano	1	[{"added": {}}]	8	1
10	2020-05-31 03:39:26.815454+00	1	Cedula de Ciudadania	1	[{"added": {}}]	9	1
11	2020-05-31 03:55:22.506439+00	1	Diego Fernando	1	[{"added": {}}]	13	1
12	2020-05-31 03:55:48.330828+00	1	Diego Fernando	2	[{"changed": {"fields": ["InvestorCelular"]}}]	13	1
13	2020-05-31 04:01:00.973663+00	2	Stuart	1	[{"added": {}}]	14	1
14	2020-05-31 04:01:25.521411+00	1	InvestorsPerWorkers object (1)	1	[{"added": {}}]	15	1
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	auth	user
5	contenttypes	contenttype
6	sessions	session
7	rappicrowdContainer	countries
8	rappicrowdContainer	currencies
9	rappicrowdContainer	docutypes
10	rappicrowdContainer	educationlevels
11	rappicrowdContainer	states
12	rappicrowdContainer	cities
13	rappicrowdContainer	investors
14	rappicrowdContainer	workers
15	rappicrowdContainer	investorsperworkers
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2020-05-29 14:55:53.754495+00
2	auth	0001_initial	2020-05-29 14:55:53.847281+00
3	admin	0001_initial	2020-05-29 14:55:54.026821+00
4	admin	0002_logentry_remove_auto_add	2020-05-29 14:55:54.530678+00
5	admin	0003_logentry_add_action_flag_choices	2020-05-29 14:55:54.555649+00
6	contenttypes	0002_remove_content_type_name	2020-05-29 14:55:54.589519+00
7	auth	0002_alter_permission_name_max_length	2020-05-29 14:55:54.598911+00
8	auth	0003_alter_user_email_max_length	2020-05-29 14:55:54.616071+00
9	auth	0004_alter_user_username_opts	2020-05-29 14:55:54.630806+00
10	auth	0005_alter_user_last_login_null	2020-05-29 14:55:54.646647+00
11	auth	0006_require_contenttypes_0002	2020-05-29 14:55:54.652504+00
12	auth	0007_alter_validators_add_error_messages	2020-05-29 14:55:54.667293+00
13	auth	0008_alter_user_username_max_length	2020-05-29 14:55:54.696041+00
14	auth	0009_alter_user_last_name_max_length	2020-05-29 14:55:54.715821+00
15	auth	0010_alter_group_name_max_length	2020-05-29 14:55:54.732094+00
16	auth	0011_update_proxy_permissions	2020-05-29 14:55:54.749433+00
17	rappicrowdContainer	0001_initial	2020-05-29 14:55:54.806252+00
18	sessions	0001_initial	2020-05-29 14:55:54.859745+00
19	rappicrowdContainer	0002_workers	2020-05-30 23:32:34.819343+00
20	rappicrowdContainer	0003_investors	2020-05-30 23:32:35.397496+00
21	rappicrowdContainer	0004_investorsperworkers	2020-05-31 03:17:17.014502+00
22	rappicrowdContainer	0005_auto_20200531_0354	2020-05-31 03:54:49.746703+00
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
1cpu8m507xfgrzk8qxvqcbu6z571dede	MTJhYzk1MDA0MTI1OGJlNTk3NDA2YTA0ZTMxNTRkOTJkMzIzYzc0Mzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI5NDA4OTdlZTliZWZjMjdjNWZjYmNhOWI2OTQzNzMxZGYxNmQ4MjczIn0=	2020-06-14 03:34:30.28092+00
\.


--
-- Data for Name: rappicrowdContainer_cities; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public."rappicrowdContainer_cities" ("cityId", "cityName", "cityCreatedAt", "cityUpdatedAt", "cityCountryId_id", "cityStateId_id") FROM stdin;
1	Cali	2020-05-31 03:37:19+00	2020-05-31 03:37:19+00	1	1
\.


--
-- Data for Name: rappicrowdContainer_countries; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public."rappicrowdContainer_countries" ("countryId", "countryName", "countryCreatedAt", "countryUpdatedAt") FROM stdin;
1	Colombia	2020-05-31 03:36:30+00	2020-05-31 03:36:30+00
\.


--
-- Data for Name: rappicrowdContainer_currencies; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public."rappicrowdContainer_currencies" ("currencyId", "currencyName", "currencyCreatedAt", "currencyUpdatedAt") FROM stdin;
1	Peso Colombiano	2020-05-31 03:38:53+00	2020-05-31 03:38:53+00
\.


--
-- Data for Name: rappicrowdContainer_docutypes; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public."rappicrowdContainer_docutypes" ("docutypeId", "docutypeName", "docutypeCreatedAt", "docutypeUpdatedAt") FROM stdin;
1	Cedula de Ciudadania	2020-05-31 03:39:14+00	2020-05-31 03:39:14+00
\.


--
-- Data for Name: rappicrowdContainer_educationlevels; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public."rappicrowdContainer_educationlevels" ("educationLevelId", "educationLevelName", "educationLevelCreatedAt", "educationLevelUpdatedAt") FROM stdin;
1	Pregrado	2020-05-31 03:37:35+00	2020-05-31 03:37:35+00
2	Postgrado	2020-05-31 03:37:55+00	2020-05-31 03:37:55+00
3	Bachillerato	2020-05-31 03:38:18+00	2020-05-31 03:38:18+00
4	Tecnico	2020-05-31 03:38:26+00	2020-05-31 03:38:26+00
5	Tecnologico	2020-05-31 03:38:33+00	2020-05-31 03:38:33+00
\.


--
-- Data for Name: rappicrowdContainer_investors; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public."rappicrowdContainer_investors" ("investorCed", "investorName", "investorLastName", "investorCelular", "investorAddress", "investorCreatedAt", "investorUpdatedAt", "investorPassword", "investorEmail", "investorCedCoutryId_id", "investorCedDocutypeId_id", "investorCityId_id", "investorStateId_id") FROM stdin;
1	Diego Fernando	Betancourt Quintero	3197152500	Carrera 1 Calle 1	2020-05-31 03:43:18+00	2020-05-31 03:43:18+00	password	diego.betancourt@gmail.com	1	1	1	1
\.


--
-- Data for Name: rappicrowdContainer_investorsperworkers; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public."rappicrowdContainer_investorsperworkers" ("investorPerWorkerId", "investorPerWorkerAmount", "investorPerWorkerCreatedAt", "investorPerWorkerUpdatedAt", "investorPerWorkerCurrencyId_id", "investorPerWorkerInvestorCed_id", "investorPerWorkerWorkerCed_id") FROM stdin;
1	500000	2020-05-31 04:01:10+00	2020-05-31 04:01:10+00	1	1	2
\.


--
-- Data for Name: rappicrowdContainer_states; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public."rappicrowdContainer_states" ("stateId", "stateName", "stateCreatedAt", "stateUpdatedAt", "stateCountryId_id") FROM stdin;
1	Valle del Cauca	2020-05-31 03:36:54+00	2020-05-31 03:36:54+00	1
\.


--
-- Data for Name: rappicrowdContainer_workers; Type: TABLE DATA; Schema: public; Owner: rappicrowd
--

COPY public."rappicrowdContainer_workers" ("workerCed", "workerName", "workerLastName", "workerCelular", "workerAddress", "workerSpentsPerMonth", "workerEarningsPerMonth", "workerLabourHoursPerDay", "workerCreatedAt", "workerUpdatedAt", "workerBirthday", "workerPassword", "workerPsychoText", "workerLicenseDriver", "workerDaysPerWeek", "workerEmail", "workerTwitter", "workerFacebook", "workerCedCountryId_id", "workerCedDocutypeId_id", "workerCityId_id", "workerCurrencyId_id", "workerEducationLevelId_id", "workerStateId_id") FROM stdin;
2	Stuart	Echeverry	3164642500	carrera 2 calle 2	500000	4000000	8	2020-05-31 03:55:57+00	2020-05-31 03:55:57+00	1990-10-10	password	ibmtext	2	6	stuart.echeverry@gmail.com	@stu	stuart.123	1	1	1	1	1	1
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 60, true);


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 1, true);


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 45, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 15, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 22, true);


--
-- Name: rappicrowdContainer_cities_cityId_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public."rappicrowdContainer_cities_cityId_seq"', 1, true);


--
-- Name: rappicrowdContainer_countries_countryId_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public."rappicrowdContainer_countries_countryId_seq"', 1, true);


--
-- Name: rappicrowdContainer_currencies_currencyId_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public."rappicrowdContainer_currencies_currencyId_seq"', 1, true);


--
-- Name: rappicrowdContainer_docutypes_docutypeId_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public."rappicrowdContainer_docutypes_docutypeId_seq"', 1, true);


--
-- Name: rappicrowdContainer_educationlevels_educationLevelId_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public."rappicrowdContainer_educationlevels_educationLevelId_seq"', 5, true);


--
-- Name: rappicrowdContainer_investorsperworkers_investorPerWorkerId_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public."rappicrowdContainer_investorsperworkers_investorPerWorkerId_seq"', 33, true);


--
-- Name: rappicrowdContainer_states_stateId_seq; Type: SEQUENCE SET; Schema: public; Owner: rappicrowd
--

SELECT pg_catalog.setval('public."rappicrowdContainer_states_stateId_seq"', 1, true);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: rappicrowdContainer_cities rappicrowdContainer_cities_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_cities"
    ADD CONSTRAINT "rappicrowdContainer_cities_pkey" PRIMARY KEY ("cityId");


--
-- Name: rappicrowdContainer_countries rappicrowdContainer_countries_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_countries"
    ADD CONSTRAINT "rappicrowdContainer_countries_pkey" PRIMARY KEY ("countryId");


--
-- Name: rappicrowdContainer_currencies rappicrowdContainer_currencies_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_currencies"
    ADD CONSTRAINT "rappicrowdContainer_currencies_pkey" PRIMARY KEY ("currencyId");


--
-- Name: rappicrowdContainer_docutypes rappicrowdContainer_docutypes_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_docutypes"
    ADD CONSTRAINT "rappicrowdContainer_docutypes_pkey" PRIMARY KEY ("docutypeId");


--
-- Name: rappicrowdContainer_educationlevels rappicrowdContainer_educationlevels_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_educationlevels"
    ADD CONSTRAINT "rappicrowdContainer_educationlevels_pkey" PRIMARY KEY ("educationLevelId");


--
-- Name: rappicrowdContainer_investors rappicrowdContainer_investors_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_investors"
    ADD CONSTRAINT "rappicrowdContainer_investors_pkey" PRIMARY KEY ("investorCed");


--
-- Name: rappicrowdContainer_investorsperworkers rappicrowdContainer_investorsperworkers_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_investorsperworkers"
    ADD CONSTRAINT "rappicrowdContainer_investorsperworkers_pkey" PRIMARY KEY ("investorPerWorkerId");


--
-- Name: rappicrowdContainer_states rappicrowdContainer_states_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_states"
    ADD CONSTRAINT "rappicrowdContainer_states_pkey" PRIMARY KEY ("stateId");


--
-- Name: rappicrowdContainer_workers rappicrowdContainer_workers_pkey; Type: CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_workers"
    ADD CONSTRAINT "rappicrowdContainer_workers_pkey" PRIMARY KEY ("workerCed");


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: rappicrowdContainer_cities_cityCountryId_id_4abafa78; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_cities_cityCountryId_id_4abafa78" ON public."rappicrowdContainer_cities" USING btree ("cityCountryId_id");


--
-- Name: rappicrowdContainer_cities_cityStateId_id_7f217a6b; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_cities_cityStateId_id_7f217a6b" ON public."rappicrowdContainer_cities" USING btree ("cityStateId_id");


--
-- Name: rappicrowdContainer_inve_investorPerWorkerInvesto_edc809f1_like; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_inve_investorPerWorkerInvesto_edc809f1_like" ON public."rappicrowdContainer_investorsperworkers" USING btree ("investorPerWorkerInvestorCed_id" varchar_pattern_ops);


--
-- Name: rappicrowdContainer_inve_investorPerWorkerWorkerC_488dfa16_like; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_inve_investorPerWorkerWorkerC_488dfa16_like" ON public."rappicrowdContainer_investorsperworkers" USING btree ("investorPerWorkerWorkerCed_id" varchar_pattern_ops);


--
-- Name: rappicrowdContainer_invest_investorPerWorkerCurrencyI_6a0c9186; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_invest_investorPerWorkerCurrencyI_6a0c9186" ON public."rappicrowdContainer_investorsperworkers" USING btree ("investorPerWorkerCurrencyId_id");


--
-- Name: rappicrowdContainer_invest_investorPerWorkerInvestorC_edc809f1; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_invest_investorPerWorkerInvestorC_edc809f1" ON public."rappicrowdContainer_investorsperworkers" USING btree ("investorPerWorkerInvestorCed_id");


--
-- Name: rappicrowdContainer_invest_investorPerWorkerWorkerCed_488dfa16; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_invest_investorPerWorkerWorkerCed_488dfa16" ON public."rappicrowdContainer_investorsperworkers" USING btree ("investorPerWorkerWorkerCed_id");


--
-- Name: rappicrowdContainer_investors_investorCedCoutryId_id_2f37978d; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_investors_investorCedCoutryId_id_2f37978d" ON public."rappicrowdContainer_investors" USING btree ("investorCedCoutryId_id");


--
-- Name: rappicrowdContainer_investors_investorCedDocutypeId_id_8e13b5e6; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_investors_investorCedDocutypeId_id_8e13b5e6" ON public."rappicrowdContainer_investors" USING btree ("investorCedDocutypeId_id");


--
-- Name: rappicrowdContainer_investors_investorCed_09fe3857_like; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_investors_investorCed_09fe3857_like" ON public."rappicrowdContainer_investors" USING btree ("investorCed" varchar_pattern_ops);


--
-- Name: rappicrowdContainer_investors_investorCityId_id_b7a9f9a5; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_investors_investorCityId_id_b7a9f9a5" ON public."rappicrowdContainer_investors" USING btree ("investorCityId_id");


--
-- Name: rappicrowdContainer_investors_investorStateId_id_0dcc3803; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_investors_investorStateId_id_0dcc3803" ON public."rappicrowdContainer_investors" USING btree ("investorStateId_id");


--
-- Name: rappicrowdContainer_states_stateCountryId_id_66476d72; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_states_stateCountryId_id_66476d72" ON public."rappicrowdContainer_states" USING btree ("stateCountryId_id");


--
-- Name: rappicrowdContainer_workers_workerCedCountryId_id_c3aa0a7c; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_workers_workerCedCountryId_id_c3aa0a7c" ON public."rappicrowdContainer_workers" USING btree ("workerCedCountryId_id");


--
-- Name: rappicrowdContainer_workers_workerCedDocutypeId_id_2a6b24f8; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_workers_workerCedDocutypeId_id_2a6b24f8" ON public."rappicrowdContainer_workers" USING btree ("workerCedDocutypeId_id");


--
-- Name: rappicrowdContainer_workers_workerCed_b0458d91_like; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_workers_workerCed_b0458d91_like" ON public."rappicrowdContainer_workers" USING btree ("workerCed" varchar_pattern_ops);


--
-- Name: rappicrowdContainer_workers_workerCityId_id_da68d140; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_workers_workerCityId_id_da68d140" ON public."rappicrowdContainer_workers" USING btree ("workerCityId_id");


--
-- Name: rappicrowdContainer_workers_workerCurrencyId_id_8a8008be; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_workers_workerCurrencyId_id_8a8008be" ON public."rappicrowdContainer_workers" USING btree ("workerCurrencyId_id");


--
-- Name: rappicrowdContainer_workers_workerEducationLevelId_id_982ded47; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_workers_workerEducationLevelId_id_982ded47" ON public."rappicrowdContainer_workers" USING btree ("workerEducationLevelId_id");


--
-- Name: rappicrowdContainer_workers_workerStateId_id_e37e3791; Type: INDEX; Schema: public; Owner: rappicrowd
--

CREATE INDEX "rappicrowdContainer_workers_workerStateId_id_e37e3791" ON public."rappicrowdContainer_workers" USING btree ("workerStateId_id");


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_cities rappicrowdContainer__cityCountryId_id_4abafa78_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_cities"
    ADD CONSTRAINT "rappicrowdContainer__cityCountryId_id_4abafa78_fk_rappicrow" FOREIGN KEY ("cityCountryId_id") REFERENCES public."rappicrowdContainer_countries"("countryId") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_cities rappicrowdContainer__cityStateId_id_7f217a6b_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_cities"
    ADD CONSTRAINT "rappicrowdContainer__cityStateId_id_7f217a6b_fk_rappicrow" FOREIGN KEY ("cityStateId_id") REFERENCES public."rappicrowdContainer_states"("stateId") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_investors rappicrowdContainer__investorCedCoutryId__2f37978d_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_investors"
    ADD CONSTRAINT "rappicrowdContainer__investorCedCoutryId__2f37978d_fk_rappicrow" FOREIGN KEY ("investorCedCoutryId_id") REFERENCES public."rappicrowdContainer_countries"("countryId") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_investors rappicrowdContainer__investorCedDocutypeI_8e13b5e6_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_investors"
    ADD CONSTRAINT "rappicrowdContainer__investorCedDocutypeI_8e13b5e6_fk_rappicrow" FOREIGN KEY ("investorCedDocutypeId_id") REFERENCES public."rappicrowdContainer_docutypes"("docutypeId") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_investors rappicrowdContainer__investorCityId_id_b7a9f9a5_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_investors"
    ADD CONSTRAINT "rappicrowdContainer__investorCityId_id_b7a9f9a5_fk_rappicrow" FOREIGN KEY ("investorCityId_id") REFERENCES public."rappicrowdContainer_cities"("cityId") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_investorsperworkers rappicrowdContainer__investorPerWorkerCur_6a0c9186_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_investorsperworkers"
    ADD CONSTRAINT "rappicrowdContainer__investorPerWorkerCur_6a0c9186_fk_rappicrow" FOREIGN KEY ("investorPerWorkerCurrencyId_id") REFERENCES public."rappicrowdContainer_currencies"("currencyId") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_investorsperworkers rappicrowdContainer__investorPerWorkerInv_edc809f1_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_investorsperworkers"
    ADD CONSTRAINT "rappicrowdContainer__investorPerWorkerInv_edc809f1_fk_rappicrow" FOREIGN KEY ("investorPerWorkerInvestorCed_id") REFERENCES public."rappicrowdContainer_investors"("investorCed") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_investorsperworkers rappicrowdContainer__investorPerWorkerWor_488dfa16_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_investorsperworkers"
    ADD CONSTRAINT "rappicrowdContainer__investorPerWorkerWor_488dfa16_fk_rappicrow" FOREIGN KEY ("investorPerWorkerWorkerCed_id") REFERENCES public."rappicrowdContainer_workers"("workerCed") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_investors rappicrowdContainer__investorStateId_id_0dcc3803_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_investors"
    ADD CONSTRAINT "rappicrowdContainer__investorStateId_id_0dcc3803_fk_rappicrow" FOREIGN KEY ("investorStateId_id") REFERENCES public."rappicrowdContainer_states"("stateId") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_states rappicrowdContainer__stateCountryId_id_66476d72_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_states"
    ADD CONSTRAINT "rappicrowdContainer__stateCountryId_id_66476d72_fk_rappicrow" FOREIGN KEY ("stateCountryId_id") REFERENCES public."rappicrowdContainer_countries"("countryId") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_workers rappicrowdContainer__workerCedCountryId_i_c3aa0a7c_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_workers"
    ADD CONSTRAINT "rappicrowdContainer__workerCedCountryId_i_c3aa0a7c_fk_rappicrow" FOREIGN KEY ("workerCedCountryId_id") REFERENCES public."rappicrowdContainer_countries"("countryId") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_workers rappicrowdContainer__workerCedDocutypeId__2a6b24f8_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_workers"
    ADD CONSTRAINT "rappicrowdContainer__workerCedDocutypeId__2a6b24f8_fk_rappicrow" FOREIGN KEY ("workerCedDocutypeId_id") REFERENCES public."rappicrowdContainer_docutypes"("docutypeId") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_workers rappicrowdContainer__workerCityId_id_da68d140_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_workers"
    ADD CONSTRAINT "rappicrowdContainer__workerCityId_id_da68d140_fk_rappicrow" FOREIGN KEY ("workerCityId_id") REFERENCES public."rappicrowdContainer_cities"("cityId") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_workers rappicrowdContainer__workerCurrencyId_id_8a8008be_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_workers"
    ADD CONSTRAINT "rappicrowdContainer__workerCurrencyId_id_8a8008be_fk_rappicrow" FOREIGN KEY ("workerCurrencyId_id") REFERENCES public."rappicrowdContainer_currencies"("currencyId") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_workers rappicrowdContainer__workerEducationLevel_982ded47_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_workers"
    ADD CONSTRAINT "rappicrowdContainer__workerEducationLevel_982ded47_fk_rappicrow" FOREIGN KEY ("workerEducationLevelId_id") REFERENCES public."rappicrowdContainer_educationlevels"("educationLevelId") DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rappicrowdContainer_workers rappicrowdContainer__workerStateId_id_e37e3791_fk_rappicrow; Type: FK CONSTRAINT; Schema: public; Owner: rappicrowd
--

ALTER TABLE ONLY public."rappicrowdContainer_workers"
    ADD CONSTRAINT "rappicrowdContainer__workerStateId_id_e37e3791_fk_rappicrow" FOREIGN KEY ("workerStateId_id") REFERENCES public."rappicrowdContainer_states"("stateId") DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

