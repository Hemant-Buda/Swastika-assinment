import {
  BookOpen,
  Home,
  Drama,
  Heart,
  Star,
  Lightbulb,
  MessageSquare,
  Mic,
  Palette,
  Music,
  FlaskConical,
  Construction,
  Laptop,
  Calculator,
  Globe,
  FileText,
  Camera,
  Puzzle,
  FileSliders
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

export default function LanguageLiteracyPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-green-700 mb-6 shadow-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-500" /> Creative
                Language and Literacy
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Language and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600">
                  Literacy in Early Childhood
                </span>{" "}
                Education
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fostering communication, expression, and cognitive development
                through linguistic experiences
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://media.istockphoto.com/id/862689744/photo/learning-to-spell.jpg?s=612x612&w=0&k=20&c=sV30t3m4P8AnSFfO29PsxI_1TmC5mWmg55fwhWJhLdA="
                  alt="Children reading and writing"
                  width={600}
                  height={100}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-15 -left-20 w-20 h-20 bg-green-200 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <BookOpen className="w-12 h-12 text-green-600" />
              </div>
              <div className="absolute -bottom-20 -right-20 w-20 h-20 bg-lime-200 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <MessageSquare className="w-10 h-10 text-lime-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-green-50">
              <CardHeader className="bg-gradient-to-r from-green-600 to-lime-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" /> Importance of Language
                  and Literacy In Creativity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Language and literacy are the heart of how children learn
                  about themselves, relate their ideas to others around them,
                  and communicate with other people. By doing so, a child learns
                  to listen, talk, read, and write while also utilizing this
                  natural gift of human language, which ultimately ensures the
                  promotion of creativity in their minds. Early Years Learning
                  Framework (EYLF) states that communication skills are
                  essential to build relationships, develop confidence, and make
                  sense of the world (ACECQA, 2022). Creative language
                  activities—like storytelling, singing, rhyming, or inventing
                  new words—invite children to think beyond the obvious and play
                  with meaning in playful ways. Literacy extends far beyond
                  simply reading books; it’s about understanding stories,
                  symbols, signs, and communication in everyday life. This
                  foundation supports children’s sense of identity and helps
                  them become lifelong learners and creative thinkers. Creative
                  literacy experiences invite children to use multiple modes of
                  expression—spoken language, drawing, gestures, and digital
                  media—which aligns with the Reggio Emilia approach of
                  embracing the “hundred languages” of children (Edwards,
                  Gandini & Forman, 2012). In this way, literacy is a rich,
                  creative process that encourages children to communicate their
                  unique perspectives and feelings in many forms.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-lime-50">
              <CardHeader className="bg-gradient-to-r from-lime-600 to-green-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Star className="w-6 h-6 mr-3" /> Creativity Theories and
                  Perspectives
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Lev Vygotsky (1978) believed language plays a vital role in
                  children’s cognitive development. He saw social interaction
                  through language as crucial for developing higher-order
                  thinking and imagination. When children engage in shared
                  storytelling and conversation, they co-construct meaning,
                  expanding their thinking and creativity. Smilansky’s theory of
                  sociodramatic play (1990) supports this idea by showing how
                  role play and narrative build social and emotional skills,
                  vital for creative expression. Howard and Mayesky (2022)
                  emphasize the importance of play-based literacy experiences
                  that invite curiosity and experimentation with language. These
                  activities help children develop the confidence to take risks
                  in their communication and explore innovative ideas
                  creatively. Supporting the diversity of children’s home
                  languages and dialects further enriches this process, creating
                  inclusive environments where all children’s voices are valued.
                  The integration of technology in literacy learning also opens
                  new creative possibilities. Digital storytelling, recording
                  oral stories, and interactive apps allow children to
                  experiment with new ways of sharing stories and ideas,
                  catering to different learning styles and preferences
                  (Australian Education Research Organisation, 2023).
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-green-50">
              <CardHeader className="bg-gradient-to-r from-green-600 to-lime-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Mic className="w-6 h-6 mr-3" /> Resources, Materials, and
                  Digital Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Early childhood teachers can foster creativity in language and
                  literacy by creating stimulating environments full of engaging
                  resources. Providing a wide range of books—picture books,
                  multicultural stories, poetry collections—and props like
                  puppets, felt boards, and story sacks invites children to
                  explore narrative and language play. Writing materials,
                  including crayons, markers, chalk, and paper, encourage early
                  mark-making and writing, supporting children’s confidence in
                  expressing themselves visually and textually. Incorporating
                  digital tools such as story-creation apps (e.g., Book Creator,
                  Storybird), audio recorders for storytelling, or video apps
                  for performances can extend children’s creativity and digital
                  literacy skills. Technology can be especially helpful for
                  children who may be shy or hesitant to express themselves
                  orally, offering alternative modes for communication.
                  Educators play a key role by modelling language, asking
                  open-ended questions, encouraging storytelling, and valuing
                  every child’s attempt at communication. Creating a safe and
                  supportive atmosphere where children feel free to experiment
                  with language helps nurture creativity and build essential
                  literacy foundations (Connor & Toper, 2015).
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Picture Books
                  </span>
                  <span className="bg-gradient-to-r from-lime-100 to-lime-200 text-lime-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Puppets & Props
                  </span>
                  <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Writing Tools
                  </span>
                  <span className="bg-gradient-to-r from-lime-100 to-lime-200 text-lime-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Story Creation Apps
                  </span>
                  <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    Audio Recorders
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-lime-50">
              <CardHeader className="bg-gradient-to-r from-lime-600 to-green-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Heart className="w-6 h-6 mr-3" /> Learning Experiences
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-lime-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      0-2 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-sm mr-3">
                          1
                        </span>{" "}
                        Babbling and Sound Play
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Encourage babies to respond to sounds and mimic
                        vocalisations through gentle back-and-forth
                        “conversations.” This early communication play fosters
                        social connection and awareness of speech rhythms.
                        Builds early speech and listening skills and supports
                        social bonding (Connor & Toper, 2015).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-lime-50 to-white p-6 rounded-xl shadow-lg border border-lime-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-lime-200 rounded-full flex items-center justify-center text-lime-700 font-bold text-sm mr-3">
                          2
                        </span>{" "}
                        Picture Book Exploration
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Use simple, brightly coloured books to explore images,
                        point to objects, and name things together. Repetitive
                        language and rhythmic text support early vocabulary and
                        attention. Supports joint attention and early word
                        learning (Howard & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-lime-500 to-green-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      2-3 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-lime-50 to-white p-6 rounded-xl shadow-lg border border-lime-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-lime-200 rounded-full flex items-center justify-center text-lime-700 font-bold text-sm mr-3">
                          3
                        </span>{" "}
                        Storytelling with Puppets
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Using puppets, narrate a simple story and invite
                        children to add sounds or actions with their puppets,
                        encouraging language and imaginative play. Enhances
                        narrative skills, vocabulary, and social interaction
                        (Edwards et al., 2012).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-sm mr-3">
                          4
                        </span>{" "}
                        Mark-Making with Different Tools
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Offer a variety of writing tools such as crayons, finger
                        paints, and chalk for children to freely explore, making
                        marks, scribbling, and early symbolic writing. Supports
                        fine motor skills and creative expression (Howard &
                        Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-lime-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      3-5 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-sm mr-3">
                          5
                        </span>{" "}
                        Group Story Creation
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Sit in a circle and collaboratively build a story with
                        each child contributing a sentence or idea. Capture the
                        story by writing it down or recording it to revisit
                        later. Fosters creativity, listening skills, and
                        cooperative language use (Vygotsky, 1978).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-lime-50 to-white p-6 rounded-xl shadow-lg border border-lime-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-lime-200 rounded-full flex items-center justify-center text-lime-700 font-bold text-sm mr-3">
                          6
                        </span>{" "}
                        Word and Rhyme Games
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Play games focusing on rhymes and sound patterns, like
                        “I Spy” using sounds or simple alliteration games, to
                        develop phonological awareness. Supports phonemic
                        awareness and playful engagement with language (Connor &
                        Toper, 2015).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-lime-500 to-green-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      6-8 Years
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-lime-50 to-white p-6 rounded-xl shadow-lg border border-lime-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-lime-200 rounded-full flex items-center justify-center text-lime-700 font-bold text-sm mr-3">
                          7
                        </span>{" "}
                        Creating Digital Stories
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Using apps like Book Creator, children write and
                        illustrate their own stories, adding audio narration or
                        animation, and share them with peers and families.
                        Builds digital literacy, storytelling skills, and
                        confidence in sharing creative work (Australian
                        Education Research Organisation, 2023).
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-sm mr-3">
                          8
                        </span>{" "}
                        Poetry and Performance
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Encourage children to write simple poems or rhymes and
                        perform them aloud with actions, costumes, or props to
                        develop expressive language and public speaking skills.
                        Enhances creativity, language development, and
                        self-expression (Howard & Mayesky, 2022).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-lime-600 to-green-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Digital Evidence & Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-700 text-lg">
                  This section will include video recordings and timelines of
                  enacted learning experiences, demonstrating practical
                  application of langauge and literacy activities across
                  different age groups.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* //link */}
                  <Link to="#" target="_blank" rel="noopener noreferrer">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100 text-center hover:shadow-2xl transition">
                      <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-greeen-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        Video Recording 1
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Finger puppet song time (2-3)
                      </p>
                    </div>
                  </Link>
                  {/* //link */}
                  <Link to="#" target="_blank" rel="noopener noreferrer">
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100  text-center hover:shadow-2xl transition">
                      <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Camera className="h-8 w-8 text-green-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">
                        Video Recording 2
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Emotion masks drama (3-5 years)
                      </p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-lime-600 to-green-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" />
                  Critical Reflection and Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <p className="text-gray-900 leading-9 font-extrabold mb-6">
                    Facilitating the “Word and Rhyme Games” and “Poetry and
                    Performance” activities reinforced how playful language
                    experiences can deepen children’s literacy skills and
                    creativity. In the rhyme game, one positive aspect was how
                    the interactive format encouraged active listening and
                    participation, supporting phonological awareness, a key
                    literacy foundation. Children showed enthusiasm as they
                    generated rhyming words, boosting confidence in language
                    play. During the poetry performance, modelling expressive
                    reading and assigning roles helped children embody
                    characters and engage emotionally, enhancing comprehension
                    and creative expression. However, one challenge was ensuring
                    all children had equal opportunities to speak during the
                    performance; some quieter children hesitated. To improve, I
                    would incorporate smaller group performances to create a
                    safer environment for all voices. Additionally, I could
                    expand the rhyme game by inviting children to invent their
                    own verses, fostering more originality. If repeating these
                    experiences, I would also use visual aids such as word cards
                    and props to support diverse learners. This approach aligns
                    with Vygotsky’s (1978) emphasis on social interaction in
                    learning and Gardner’s (2011) theory of multiple
                    intelligences by valuing linguistic, interpersonal, and
                    bodily-kinesthetics creativity. Overall, these enactments
                    highlighted the importance of balancing structure with
                    child-led expression to cultivate creativity in language and
                    literacy
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="sticky top-4 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-green-50">
              <CardHeader className="bg-gradient-to-r from-green-600 to-lime-600 text-white">
                <CardTitle className="text-lg">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col space-y-3">
                <Link to="/">
                  <Button className="w-full justify-start bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 shadow-sm">
                    <Home className="h-4 w-4 mr-2" /> Home Page
                  </Button>
                </Link>
                <Link to="/drama-puppetry">
                  <Button className="w-full justify-start bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 hover:from-purple-200 hover:to-purple-300 shadow-sm">
                    <Drama className="h-4 w-4 mr-2" /> Drama & Puppetry
                  </Button>
                </Link>
                <Link to="/art">
                  <Button className="w-full justify-start bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 hover:from-pink-200 hover:to-pink-300 shadow-sm">
                    <Palette className="h-4 w-4 mr-2" /> Art
                  </Button>
                </Link>
                <Link to="/movement-music">
                  <Button className="w-full justify-start bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 hover:from-blue-200 hover:to-blue-300 shadow-sm">
                    <Music className="h-4 w-4 mr-2" /> Movement & Music
                  </Button>
                </Link>

                <Link to="/science">
                  <Button className="w-full justify-start bg-gradient-to-r from-red-100 to-red-200 text-red-700 hover:from-red-200 hover:to-red-300 shadow-sm">
                    <FlaskConical className="h-4 w-4 mr-2" /> Science
                  </Button>
                </Link>
                <Link to="/engineering">
                  <Button className="w-full justify-start bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 hover:from-yellow-200 hover:to-yellow-300 shadow-sm">
                    <Construction className="h-4 w-4 mr-2" /> Engineering
                  </Button>
                </Link>
                <Link to="/technologies">
                  <Button className="w-full justify-start bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-700 hover:from-cyan-200 hover:to-cyan-300 shadow-sm">
                    <Laptop className="h-4 w-4 mr-2" /> Technologies
                  </Button>
                </Link>
                <Link to="/mathematics-numeracy">
                  <Button className="w-full justify-start bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 hover:from-indigo-200 hover:to-indigo-300 shadow-sm">
                    <Calculator className="h-4 w-4 mr-2" /> Mathematics &
                    Numeracy
                  </Button>
                </Link>
                <Link to="/humanities-social-sciences">
                  <Button className="w-full justify-start bg-gradient-to-r from-teal-100 to-teal-200 text-teal-700 hover:from-teal-200 hover:to-teal-300 shadow-sm">
                    <Globe className="h-4 w-4 mr-2" /> Humanities & Social
                    Sciences
                  </Button>
                </Link>
                <Link to="/integrated-curriculum">
                  <Button className="w-full justify-start bg-gradient-to-r from-lime-100 to-lime-200 text-lime-700 hover:from-lime-200 hover:to-lime-300 shadow-sm">
                    <Puzzle className="h-4 w-4 mr-2" /> Integrated Curriculum
                  </Button>
                </Link>
                <Link to="/reference">
                  <Button className="w-full justify-start bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 hover:from-orange-200 hover:to-orange-300 shadow-sm">
                    <FileSliders className="h-4 w-4 mr-2" /> References
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
