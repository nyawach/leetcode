rename -p 's/(\d+)(.+)\/(\d+)/sprintf("%04d%s\/%04d", $1, $2, $3)/e' ./**/*
