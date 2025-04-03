interface Paper {
  id: string;
  imageSrc: string;
  title: string;
  author: string;
  journal: string;
  date: string;
  content: string;
  extendedContent?: string[];
  preview: string;
}

const papers: Paper[] = [
  {
    id: 'aegis-trust-empowers-researchers',
    imageSrc: '/n-one.png',
    title: 'Aegis Trust empowers Rwandan researchers to take lessons to the world',
    author: 'bella',
    journal: 'aegis',
    date: '21-06',
    content: 'Aegis Trust’s department for Research, Policy and Higher Education (RPHE) held a two-day capacity-building workshop to support Rwandan researchers',
    extendedContent: [
      'to share their knowledge and experience with the world. Themed ‘Research Methodologies, Publication, Dissemination and Uptake’, the workshop was attended',
      'by researchers, academics, policy-makers and practitioners. It took place at the Kigali Genocide Memorial Peace School, 28-29 March 2017',
      'During the first day of the gathering, participants shared insights on methods that contribute to produce robust, reliable and informative research results.',
      'Dr James Smith, CEO of Aegis Trust, opened the workshop by emphasising how important researchers are to the work of Aegis and also other peace building stakeholders',
      'in Rwanda and around the world.',
      '“As the medical world learned with cancer prevention, there is no ‘magic bullet’ for preventing atrocities – building peace is complex.All good practice and',
      'policy should be adapted and improved by evidence regarding effectiveness.The theories that underpin Aegis Trust’s peace education will benefit from the rigour of testing,”,',
      'Dr Smith said. “The research community is needed not only to evaluate outcomes and the impact of peace education but also to inform peace building with new ideas and evidence based approaches,” he added.',

      'The discussed topics included an analysis of research methods in the social sciences, using theories in research, and strategies for successful fieldwork.Great Lakes',
      'Programme Coordinator at Never Again Rwanda, Reverien Interayamahanga, gave an overview of approaches to research in social sciences including qualitative and quantitative',
      'methodologies.He underlined that research purposes are instrumental in knowing whether to use qualitative, quantitative, or mixed methods approaches.',

      'Other presenters contributed by discussing research ethics and how best to engage with fieldwork in different settings.On identifying appropriate theories to be used',
      'for a given research, experienced researcher and former Director of Aegis’ Research, Policy and Higher Education programme, Dr.Phil Clark, said that the researcher has',
      'the independence to use applied or tested theory but also to build tailored theories fitting the specific community or phenomena being studied.',
      '“Theory is not one - size - fits - all.Neither does it always come out of literature.It could involve day - to - day behaviour from people that are entirely involved in',
      'the phenomena being studied and include different variables,” Clark noted.',
      ' So far, the workshop has been a significant learning platform for participants who aspire to conduct impactful research in Rwanda.Dr Ibrahim Ndagijimana, a Rwandan researcher, commended the initiative:'
    ],
    preview: '/n-one.png'
  }
];

export default papers;