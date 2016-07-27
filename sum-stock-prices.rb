# ARGV[0]: File with values
lines = File.open(ARGV[0], 'r') { |f| f.readlines }

puts lines.reject { |l| l.start_with?('Tipo') }
          .select { |l| l.split("\t").size == 7  }
          .map { |l| l.split("\t").last.sub("\n", '').sub(',', '.').to_f }
          .reduce &:+
